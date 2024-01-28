'use client'
import { FormEvent, useState } from "react"
import styles from "@/styles/Font.module.css"
import Image from "next/image"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Signin(){
    const [showPassword,setShowPassword] = useState(false);
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [email,setEmail] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false
            });
            if (res?.error) {
                setError(res?.error)
                return
            }
            router.replace('/')
            // I don't know how to fix this one but this works
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            setError("Sign in failed. Account isn't existed.")
        }
    }

    return (
        <div className={`${styles.fontQuestrial} w-screen h-screen flex justify-center items-center bg-slate-300`}>
            <div className="w-[400px] h-[460px] border-[1px] flex justify-center rounded-2xl opacity-50
            bg-slate-200 mt-[130px] flex-wrap">
                <div className="h-[35%] text-center w-full text-[25px]"> 
                    <div className="w-full justify-center flex items-end h-[70%]">
                        <Image className="w-[150px] h-full"
                        src="/img/profile.png"
                        alt="Error to download profile"
                        width = {1000}
                        height = {1000}/>
                    </div>
                    
                    <div className="w-full text-center h-[30%]">
                        MEMBER LOGIN
                    </div>
                </div>

                <div className="h-[45%] w-full flex justify-center items-end flex-wrap">
                    <form onSubmit={handleSubmit} action="" className="w-full">
                        <div className="text-center">
                            <input className="w-[75%] h-[50px] indent-5" type="email" placeholder="Email ID"
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="text-center">
                            <input className="w-[75%] h-[50px] indent-5 mt-[20px]" type={showPassword? "text" : "password"} placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}/>
                            <span className="cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {
                                showPassword? <h1>Hide Password</h1> :
                                <h1>Show Password</h1>
                                }
                            </span>
                        </div>
                        
                        <div className="text-center w-full mt-[23px]">
                            <button type="submit" className="text-center h-[45px] text-[15px] bg-slate-700 text-white w-[50%] rounded-xl
                            hover:bg-slate-600 duration-150 ">
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>

                <div className="h-[20%] flex w-full justify-center items-center">
                    <h1>Don't Have Account Yet? <Link className="underline text-blue-900 hover:text-blue-700" href={"/"}>Register</Link> Here</h1>
                </div>
            </div>
        </div>
    )
}