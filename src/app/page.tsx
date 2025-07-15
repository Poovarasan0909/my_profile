"use client"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"




export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/resume")
    }, [router]);
    //const handleOnClick = () => {
    //    router.push("/resume")
    //}
   
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          {/*<Link href="/about">About Me</Link>*/}
          {/*<Box sx={{ width: '100%', paddingTop: '30rem' }}>*/}
          {/*    <LinearProgress />*/}
          {/*</Box>*/}
    </div>
  );
}
