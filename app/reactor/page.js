'use client';

import Typewriter from "../components/TypewriterBox";

import { useState } from 'react';

export default function Reactor(){
    const [cameraText, setCameraText] = useState("Reactor Footage - CAMERA 1");

    return(
        <main className="bg-slate-950 h-screen grid grid-cols-12 gap-3 p-2 font-mono">
            {/*reactor side*/}
            <div className="flex flex-col bg-black col-span-5 rounded-lg border border-slate-500 w-full h-full">
                <div className="p-2 border border-x-0 border-t-0 border-slate-500">
                    <Typewriter text={cameraText} className="p-2 rounded-t-md" speed={87} />
                </div>
            </div>
            <div className="flex flex-col bg-black col-span-7 rounded-lg border border-slate-500 w-full h-full">
                <div className="p-2 border border-x-0 border-t-0 border-slate-500">
                    <Typewriter text="Control Panel" className="p-2 rounded-t-md" speed={0} />
                </div>
                <div className="p-2 grid grid-cols-7 gap-2">
                    <div className="id-card flex flex-col flex-start col-span-4 p-3 rounded-md bg-white/20 h-30 w-full">
                        <p className="text text-lg">
                            Identity Card
                        </p>
                    </div>
                    <div className="checklist flex flex-col flex-start col-span-3 p-3 rounded-md bg-white/20 h-30 w-full">
                        <p className="text text-md">
                            Checklist
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}