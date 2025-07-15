"use client"
import { useRouter } from "next/navigation"

export default function Home() {
    const router = useRouter();

    const handleOnClick = () => {
        router.push("/resume")
    }
   
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-red-950">
      <h1>tesr</h1>
          <button onClick={() => handleOnClick()}> View Resume </button>
          <button onClick={() => router.push("/test")}> View Test Page </button>
    </div>
  );
}
