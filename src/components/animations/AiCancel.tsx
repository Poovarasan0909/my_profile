import { useEffect, useRef, useState } from "react";
import "../../css/AiCancel.css";

export default function AiCancel({onClickFunction}: {onClickFunction: () => void}) {
  const launcherRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const aiTextRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const launcher = launcherRef.current;
    const orb = orbRef.current;
    const aiText = aiTextRef.current;

    if (!launcher || !orb || !aiText) return;

    // --- 1. 3D Parallax Mouse Movement Effect ---
    const handleMouseMove = (e: MouseEvent) => {
      if (isAnimating) return;
      const rect = launcher?.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const maxRotate = 25;
      const rotateX = (deltaY / window.innerHeight) * maxRotate * 2;
      const rotateY = (deltaX / window.innerWidth) * maxRotate * 2;

      orb.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const maxTextMove = 8;
      const x = Math.cos(angle) * maxTextMove;
      const y = Math.sin(angle) * maxTextMove;

      aiText.style.transform = `translateX(${x}px) translateY(${y}px) translateZ(30px)`;
    };

    const handleMouseLeave = () => {
      if (isAnimating) return;
      orb.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0px)";
      aiText.style.transform =
        "translateX(0px) translateY(0px) translateZ(0px)";
    };

    const handleClick = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      launcher.classList.add("activating");

      setTimeout(() => {
        console.log("AI Launcher Clicked! Opening portfolio assistant...");
        onClickFunction();
        launcher.classList.remove("activating");
        setIsAnimating(false);
      }, 300);
    };

    document.addEventListener("mousemove", handleMouseMove);
    launcher.addEventListener("mouseleave", handleMouseLeave);
    launcher.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      launcher.removeEventListener("mouseleave", handleMouseLeave);
      launcher.removeEventListener("click", handleClick);
    };
  }, [isAnimating]);

  return (
    <div id="ai-cancel" ref={launcherRef} title="Engage AI Assistant">
      <div id="ai-core-container-cancel">
        <div id="ai-orb-cancel" ref={orbRef}>
          <div id="ai-text-cancel" ref={aiTextRef}>
            <img src="cancel_img.png" width={30} height={30}/>
            </div>
        </div>
        <div className="cb-ring cb-ring-hover cb-ring-1"></div>
        <div className="cb-ring cb-ring-hover cb-ring-2"></div>
        <div className="cb-ring cb-ring-activate"></div>
      </div>
    </div>
  );
}