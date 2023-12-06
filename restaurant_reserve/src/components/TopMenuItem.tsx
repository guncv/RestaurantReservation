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
        <div className="cursor-pointer relative overflow-hidden" 
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
            <div className={`${hover? "-translate-y-full" : ""} duration-150`}>
                {name}
            </div>
            <Link href={path} className={`text-slate-500 ${hover? "-translate-y-full" : ""} absolute duration-150`}>
                {name}
            </Link>
        </div>
    )
}