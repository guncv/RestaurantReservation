import styles from "@/styles/Font.module.css"
import Image from "next/image"
import TopMenuItem from "./TopMenuItem"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function TopMenuLayout(){
    const session = await getServerSession(authOptions);

    return (
        <div className="w-screen px-[5%] bg-slate-100">
            <div className={`${styles.fontQuestrial} h-[80px] font-bold text-[1vw] min-w-fit flex items-center
            border-black border-b-[2px] justify-between w-full`}>
                <div className="w-2/5">
                    CHANAGUN GROUP
                        {
                            session? session.user?.name :
                            ""
                        }
                </div>

                <div className="w-1/5 flex justify-center mt-[75px]">
                    <div className="bg-slate-100 rounded-full w-fit">
                        <Image className="w-[150px] h-[150px] rotate-12" 
                        src="/img/logo.png"
                        alt="Failed To Load Image"
                        width={500}
                        height={500}/>
                    </div>  
                </div>

                <div className="w-2/5 flex flex-row justify-end items-center space-x-[2vw]">
                    <TopMenuItem path="/" name="HOME"/> 
                    <TopMenuItem path="/" name="BOOKING_HISTORY"/>  
                    <TopMenuItem path="/" name="CONTACT"/>
                    {
                        session ? <TopMenuItem path="/api/auth/signout" name="SIGN_OUT"/>
                        : <TopMenuItem path="/api/auth/signin" name="SIGN_IN"/>
                    }
                    <TopMenuItem path="/" name="REGISTER"/>  
                </div>
            </div>
        </div>

    )
}