import styles from "@/styles/Font.module.css"
import Image from "next/image"

export default function Contact(){
    return (
        <div className={`${styles.fontQuestrial} text-white w-full h-[65vh] bg-slate-700 mt-[200px] py-[5%] px-[7%]`}>
            <div className="border-y-[0.1px] h-[80%] border-y-white">

                <div className="flex flex-row flex-wrap justify-start pr-[2px]">
                    <div className="flex flex-col flex-wrap h-full w-[30%] mt-[30px]">
                        <div className="text-[2vw]">
                            CHANAGUN GROUP
                        </div>
                        <div className="text-[0.8vw] text-slate-200 opacity-70 mt-[15px]">
                            savor the flavor! Explore our restaurant reserve website for instant bookings, 
                            exclusive offers, and a taste of convenience. 
                            Elevate your dining experience today at <span>HERE</span>.
                        </div>
                        <div className="flex flex-row flex-wrap mt-[25px] items-center">
                            <div className="w-fit h-fit bg-white rounded-full">
                                <Image className="w-[4vw] h-[4vw]"
                                src="/img/logo.png"
                                alt="Failed To Load Picture"
                                width={1000}
                                height={1000}/>
                            </div>
                            <div className="ml-[10px]">
                                <div>
                                    <span>Contact:</span>  
                                    <span className="text-slate-200 opacity-70 ml-[5px]">
                                        chanagun.vir@gmail.com
                                    </span>
                                </div>
                                <div>
                                    <span>Tel:</span>  
                                    <span className="text-slate-200 opacity-70 ml-[5px]">
                                        094-478-1006
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[1px] h-[full] border-[0.5px] border-white ">
                    </div>
                </div>

            </div>

        </div>
    )
}