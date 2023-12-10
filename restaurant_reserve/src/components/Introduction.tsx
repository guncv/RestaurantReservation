import styles from "@/styles/Font.module.css"
import Image from "next/image"

export default function Introduction(){
    return (
        <div className={`${styles.fontQuestrial} w-full min-w-fit font-bold text-center`}>
            <div className="text-[15px] text-slate-400">
            OPENING DECEMBER 2023
            </div>

            <div className="text-[80px] mt-[20px]">
            <div>
                WELCOME TO:
                <br />
                CHANAGUN WEBSITE
            </div>
            </div>
            <div className="mt-[10px] opacity-50">
                Elevate your dining experience – reserve your table effortlessly at 
                CHANAGUN Website 
                <br />
                and embark on a culinary journey like never before!
            </div>

            <div className="flex justify-center flex-row mt-[100px] space-x-[20px]"> 
                <Image className="w-[22vw] -rotate-12 min-w-[220px] h-[30vw] min-h-[300px] mt-[80px]"
                src="/img/banner1.jpg"
                alt="Failed To Load Picture"
                width={1000}
                height={1000}/>

                <Image className="w-[24vw] z-10 min-w-[220px] min-h-[400px] h-[40vw]"
                src="/img/banner2.jpg"
                alt="Failed To Load Picture"
                width={1000}
                height={1000}/>

                <Image className="w-[22vw] rotate-12 min-w-[220px] h-[30vw] min-h-[300px] mt-[80px]"
                src="/img/banner3.jpg"
                alt="Failed To Load Picture"
                width={1000}
                height={1000}/>
            </div>
        </div>
    )
}