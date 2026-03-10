import Typewriter from "./components/TypewriterBox";

export default function Home() {
  const gameNameText = "S.C.R.A.M.\nNUCLEAR POWER STATION SUPERVISOR TEST\nCAN YOU KEEP THE GRID STABLE?";

  return (
    <main className="p-10 bg-slate-950 min-h-screen flex flex-col items-center">
      <Typewriter
        className="rounded-lg drop-shadow-[0_0_8px-rgba(52, 211, 153, 0.8)]"
        text={gameNameText}
        width="450px"
        height="120px"
        speed={80}
      />
    </main>
  );
}
