"use client";

import {useState, useEffect} from "react";

export default function Typewriter({
    text="",
    height="200px",
    width="100%",
    speed=50,
    fontSize="1rem",
    className=""
}){
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(index >= text.length) return;

        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            setIndex((prev) => prev + 1);
        }, speed);

        return ()=> clearTimeout(timeout)
    }, [index, text, speed]);

    useEffect(() => {
        setDisplayedText("");
        setIndex(0);
    }, [text]);

    return(
        <div className={`relative overflow-hidden border border-slate-700 bg-slate-900 p-4 font-mono leading-relaxed h-fit ${className}`}>
            <div className="h-full overflow-y-auto break-words whitespace-pre-wrap text-emerald-300">
                {displayedText}
                <span className={`display-${text !== '' ? 'flex' : 'hidden'}inline-block w-2 h-4 ml-1 translate-y-1 bg-emerald-300 animate-pulse`} />
            </div>
        </div>
    )
}