import styles from "@/styles/Font.module.css"
import Image from "next/image"
import TopMenuItem from "./TopMenuItem"

export default function TopMenuLayout(){
    return (
        <div className="w-screen px-[5%]">
            <div className={`${styles.fontQuestrial} h-[80px] font-bold text-[17px] flex items-center
            border-black border-b-[2px] justify-between w-full`}>
                <div className="w-[30%]">
                    CHANAGUN GROUP
                </div>

                <div className="bg-slate-50 rounded-full mt-[75px]">
                    <Image className="w-[150px] h-[150px] rotate-12" 
                    src="/img/logo.png"
                    alt="Failed To Load Image"
                    width={500}
                    height={500}/>
                </div>

                <div className="w-[30%] flex flex-row space-x-[35px] mt-[25px]">
                    <TopMenuItem path="/" name="HOME"/> 
                    <TopMenuItem path="/" name="BOOKING_HISTORY"/>  
                    <TopMenuItem path="/" name="SIGN_IN"/>
                    <TopMenuItem path="/" name="REGISTER"/>  
                </div>
            </div>
        </div>

    )
}