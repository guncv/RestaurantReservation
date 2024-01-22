'use client'
import { signOut, useSession } from "next-auth/react"
import styles from "@/styles/Font.module.css"
import { useRouter } from "next/navigation";


export default function SignOut(){
    const router = useRouter();
    const {data:session} = useSession();

    const handlerSignout = async() => {
        if (session) {
            await signOut({redirect:false})
        } 
        setTimeout(() => {
            window.location.reload();
        }, 2000);
        router.push("/");
    }

    return (
        <div className={`${styles.fontQuestrial} w-screen h-screen justify-center flex items-center`}>
            <div className="bg-white w-[500px] h-[250px] border-black border-[1px] flex 
            flex-wrap justify-center">
                <div className="text-[50px] h-[50%] w-full flex items-center justify-center">
                    SIGN OUT 
                </div>
                <div className="text-[20px] h-[25%] w-full text-slate-400 flex justify-center items-center">
                    Are you sure to Sign out ?
                </div>
                <div className="flex justify-center w-full h-[25%]">
                    <button className="bg-slate-600 text-white text-[20px] w-[80%] h-[50px] rounded-full border-[1px] border-slate-100
                    hover:bg-red-100 hover:text-red-500 hover:border-red-600 hover:scale-110 hover:font-bold duration-150"
                    onClick={handlerSignout}>
                        SIGN OUT
                    </button>
                </div>
            </div>
        </div>
    )
}