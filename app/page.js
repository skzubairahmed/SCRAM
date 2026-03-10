'use client';
import { redirect } from "next/navigation";

import Typewriter from "./components/TypewriterBox";
import {useState, useEffect} from 'react';

export default function Home() {
  const gameNameText = "S.C.R.A.M.";
  
  const [terminalWelcomeText, setTerminalWelcomeText] = useState("");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalWowText, setTerminalWowText] = useState("");
 
  const handleTerminalInput = (e) => {
    e.preventDefault();
    
    const input = terminalInput.trim();

    if(input.toLowerCase() === "start"){
      setTerminalWowText("System rebooting..........");
      setTimeout(() => {
        redirect('/reactor');
      }, 2050);
    }else if(input !== ""){
      const name = input;
      localStorage.setItem('name', name);
      setTerminalInput("");
      setTerminalWowText(`Are you really ${name}? We have been waiting for you since a long time.\nEnter 'start' to continue`);
    }
  }

  return (
    <main className="p-10 bg-slate-950 min-h-screen flex flex-col gap-3 items-center">
      <Typewriter
        className="rounded-lg drop-shadow-[0_0_8px-rgba(52, 211, 153, 0.8)] text-[80px] w-135 h-fit text-center"
        text={gameNameText}
        speed={90}
      />
      <div className="p-4 bg-slate-900 rounded-lg border border-slate-700 h-fit w-135 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <button onClick={() => setTerminalWelcomeText("Welcome aboard Scientist! Enter your name:")} className="p-3 bg-slate-700 text-slate-300 cursor-pointer w-fit h-fit rounded-lg border-slate-700">
          START TERMINAL
          </button>
          <div className="flex flex-col gap-0">
            <Typewriter 
            className="bg-transparent border-b-0" 
            text={terminalWelcomeText} 
            speed={90} 
            />
            <Typewriter 
            className="bg-transparent border-t-0" 
            text={terminalWowText} 
            speed={90} 
            />
          </div>
        </div>
        <form onSubmit={handleTerminalInput}>
          <input type="text" value={terminalInput} onChange={(e) => {setTerminalInput(e.target.value)}} className="p-2 w-full h-10 border border-slate-700 rounded-md" placeholder="Enter commands here..." />
          <button type="submit" className="hidden" />
        </form>
      </div>
    </main>
  );
}
