'use client'
import styles from "@/styles/Font.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ContactLayout(){
    const [mode,setMode] = useState(true);

    return (
        <div className="px-[5%] w-screen bg-slate-700">
            <div className={`${styles.fontQuestrial} w-full font-bold justify-between flex items-center text-white relative h-[47px]`}>
                <div className={`${styles.Questrial} text-[13px]`}>
                   DESIGN BY GUNCV_
                </div>

                <div className="flex flex-row ml-[10%] space-x-[10px] items-center">
                    <div className="rounded-full p-[5px] hover:bg-slate-600 duration-300">
                        <Link href="https://www.facebook.com/profile.php?id=100009512147281" target="_blank">
                            <Image className="w-[21px] h-[21px]"
                            src="/img/facebook.png"
                            alt="Failed To Load Image"
                            width={500}
                            height={500}/>
                        </Link>
                    </div>
                    <div className="rounded-full p-[7px] hover:bg-slate-600 duration-300">
                        <Link href="https://www.instagram.com/guncv_/" target="_blank">
                            <Image className="w-[15px] h-[15px]"
                            src="/img/instagram.png"
                            alt="Failed To Load Image"
                            width={500}
                            height={500}/>
                        </Link>
                    </div>
                    <div className="rounded-full p-[7px] hover:bg-slate-600 duration-300">
                        <Link href="https://github.com/guncv" target="_blank">
                            <Image className="w-[15px] h-[15px]"
                            src="/img/github.png"
                            alt="Failed To Load Image"
                            width={500}
                            height={500}/>
                        </Link>
                    </div>

                    <div className="flex flex-row justify-around items-center ml-[10px] text-[13px] space-x-[15px]">
                        <div className="bg-white w-[1px] h-[47px] border-white opacity-50">

                        </div>

                        <div className="overflow-hidden relative">
                            <div className={`${mode? "" : "-translate-y-full"} duration-300`}>
                                LIGHT
                            </div>
                            <div className={`${mode? "" : "-translate-y-full"} duration-300 absolute`}>
                                DARK
                            </div>
                        </div>

                    <div className={`${mode? "rotate-0 bg-slate-100" : "rotate-180 bg-slate-400"} hover:scale-110
                    rounded-full p-[5px] duration-300 cursor-pointer`}>
                        <Image className="w-[17px] h-[17px]"
                        src="/img/template.png"
                        alt="Failed To Load Image"
                        width={500}
                        height={500}
                        onClick={()=>setMode(!mode)}/>
                    </div>
                </div>
                </div>


            </div>
        </div>       
    )
}