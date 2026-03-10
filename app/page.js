'use client';
import { useRouter } from "next/navigation";
import Typewriter from "./components/TypewriterBox";
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const gameNameText = "S.C.R.A.M.";
  
  const [terminalWelcomeText, setTerminalWelcomeText] = useState("");
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalWowText, setTerminalWowText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setTerminalWelcomeText("Welcome. Whats youre name?");
    }, 1800)
  }, []);
 
  const handleTerminalInput = (e) => {
    e.preventDefault();
    const input = terminalInput.trim();

    if(input.toLowerCase() === "start"){
      setTerminalWowText("SYSTEM REBOOTING........SUCCESS\nACCESSING CORE........SUCCESS");
      setTimeout(() => {
        router.push('/reactor');
      }, 2080);
    } else if(input !== ""){
      localStorage.setItem('name', input);
      setTerminalInput("");
      setTerminalWowText(`Are you really ${input}? We have been waiting for you since a long time.\nEnter 'start' to continue`);
    }
  }

  return (
    <main className="p-10 bg-slate-950 min-h-screen flex flex-col gap-3 items-center font-mono">
      <Typewriter
        className="text-emerald-500 text-[80px] w-[540px] text-center [text-shadow:0_0_10px_rgba(16,185,129,0.8)]"
        text={gameNameText}
        speed={120}
      />
      <div className="relative p-6 bg-black rounded-lg border border-emerald-900/50 w-[540px] h-[400px] flex flex-col overflow-hidden shadow-2xl">
        <div 
          className="absolute inset-0 pointer-events-none z-50 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
              linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))
            `,
            backgroundSize: '100% 3px, 3px 100%'
          }}
        />
        <div className="absolute inset-0 pointer-events-none z-40 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)]" />
        <div className="relative z-10 flex flex-col flex-1 gap-4">
          <div className="flex flex-col text-emerald-500 [text-shadow:0_0_5px_rgba(16,185,129,0.5)]">
            <Typewriter 
              className="bg-transparent border-0 p-0 mb-1" 
              text={terminalWelcomeText} 
              speed={40} 
            />
            <Typewriter 
              className="bg-transparent border-0 p-0 text-emerald-400/80" 
              text={terminalWowText} 
              speed={40} 
            />
          </div>

          <form onSubmit={handleTerminalInput} className="sticky-bottom mt-auto">
            <div className="flex items-center gap-2 border-b border-emerald-900/50 py-1">
              <span className="text-emerald-800">{">"}</span>
              <input 
                type="text" 
                value={terminalInput} 
                onChange={(e) => setTerminalInput(e.target.value)} 
                className="bg-transparent w-full text-emerald-400 outline-none placeholder:text-emerald-900" 
                placeholder="COMMAND..." 
                autoFocus
              />
            </div>
            <button type="submit" className="hidden" />
          </form>
        </div>
      </div>
    </main>
  );
}