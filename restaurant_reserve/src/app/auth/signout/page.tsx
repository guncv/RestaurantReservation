'use client'
import { signOut, useSession } from "next-auth/react"
import styles from "@/styles/Font.module.css"
import { useState } from "react";

export default function SignOut(){
    const {data:session} = useSession();  

    return (
        <div className={`${styles.fontQuestrial} w-screen h-screen justify-center flex items-center`}>
            <div className="bg-white w-[500px] h-[300px] border-black border-[1px] flex 
            flex-wrap justify-center items-center">
                <div className="text-[50px] text-center w-full">
                    SIGN OUT 
                </div>
                <div className="text-[20px] w-full text-center text-slate-400">
                    Are you sure to sign out from {session?.user.name}
                </div>
                <div className="flex justify-center w-full">
                    <button className="bg-slate-600 text-white text-[20px] w-[80%] h-[50px] rounded-full border-[1px] border-slate-100
                    hover:bg-red-100 hover:text-red-500 hover:border-red-600 hover:scale-110 hover:font-bold duration-150">
                        SIGN OUT
                    </button>
                </div>
            </div>
        </div>
    )
}