"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home(){
  const [isWelcomed, setIsWelcomed] = useState(false);

  if(!isWelcomed){
    return(
      <div>
        <Link href="https://flavortown.hackclub.com">
          <img src="/flag-orpheus-top.svg" className="top-0 l-0 m-0" />
        </Link>
        <main className="h-full w-full flex flex-col gap-2 items-center justify-center">
          <div className="bg-slate-900 flex flex-col gap-3 items-center rounded-md p-3 w-fit h-fit">
            <Link className="radiation-glow-text" href="https://flavortown.hackclub.com/projects/16576">
              Click here to follow the project.
            </Link>
            <Link className="radiation-glow-text" href="/credits">
              These people helped me! Click here to check them out.
            </Link>
            <button onClick={() => {setIsWelcomed(true)}} className="p-3 w-fit h-fit border border-slate-500 rounded-md cursor-pointer">
              Click here to start
            </button>
          </div>
        </main>
      </div>
    );
  };

  return(
    <main className="bg-slate-950 grid grid-cols-3 gap-3 h-screen w-full p-3">
      {/*context section*/}
      <div className="col-span-1 h-full w-full border border-slate-500 rounded-lg">

      </div>


      {/*menu section*/}
      <div className="col-span-2 flex flex-cols p-2 h-full w-full border border-slate-500 rounded-lg">
        <div className="h-fit w-full rounded-lg border border-slate-500 flex flex-row gap-3 p-2">
          <div className="h-28 w-28 flex flex-row items-center justify-between gap-5">
            <Image alt="icon" className="rounded-sm" src="/favicon.ico" height={120} width={100} />
            <span 
            className="radiation-glow-text text text-[100px]">
              S.C.R.A.M.
            </span>
          </div>
        </div>


      </div>
    </main>
  );
}