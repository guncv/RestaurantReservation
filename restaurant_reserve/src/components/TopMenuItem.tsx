'use client'
import Link from "next/link"
import { useState } from "react"

interface Props {
    name:string
    path:string
}

export default function TopMenuItem({name,path} : Props){
    const [hover,setHover] = useState(false);

    function handleHover(){
        setHover(!hover);
    }

    return (
        <div className="flex flex-col cursor-pointer" 
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
            <div className={`${hover? "mt-[-25px] opacity-0" : "opacity-100"} duration-300`}>
                {name}
            </div>
            <Link href={path} className={`text-slate-600 ${hover? "opacity-100" : "opacity-0"}`}>
                {name}
            </Link>
        </div>
    )
}