'use client'
import Image from "next/image"
import { useState,useEffect } from "react"
import styles from "@/styles/Font.module.css"

export default function RestaurantIntro(){
    const [index,setIndex] = useState(0);
    const [hover,setHover] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            setIndex((index+1)%3);
        },5000)
    },[index])
    
    const image = [
        "/img/banner4.jpg",
        "/img/banner5.jpg",
        "/img/banner6.jpg"
    ]

    return (
        <div className="relative"
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}>
            <div className="h-[40vw] w-full flex-row flex justify-around flex-wrap mt-[150px] overflow-hidden">
                <div className={`${hover? "translate-x-full" : ""} w-[47%] h-full relative overflow-hidden rounded-2xl duration-500`}>
                    <Image className={`${hover? "rotate-2 scale-125" : ""} duration-500`}
                    src={image[index]}
                    alt="Failed To Load Image"
                    fill={true}/>
                </div>
            
                <div className={`${hover? "translate-x-full opacity-0" : ""} w-[47%] flex-col justify-between h-full flex relative duration-500`}>
                    <Image className="h-[47%] w-full duration-300 rounded-xl"
                    src="/img/banner7.jpg"
                    alt="Failed To Load Image"
                    width={1000}
                    height={1000}/>

                    <Image className="h-[47%] w-full duration-300 rounded-xl"
                    src="/img/banner6.jpg"
                    alt="Failed To Load Image"
                    width={1000}
                       height={1000}/>
                </div>
                </div>
                <div className={`${hover? "opacity-100 -translate-y-full" : "opacity-0"}  ${styles.fontQuestrial} absolute h-full overflow-hidden rounded-2xl duration-500
                    flex flex-col flex-wrap justify-center text-black w-[47%]`} >
                    <div className="relative text-slate-400 text-[1vw]">
                        CHANAGUN
                    </div>
                    <div className="text-[3vw] font-bold">
                        RESTAURANT 
                        <br/>
                        RESERVATION WEBSITE
                    </div>
                    <div className="text-[1vw] mt-[30px]">
                        Skip the wait, 
                        <br />
                        savor the flavor! Explore our restaurant reserve website for instant bookings, 
                        exclusive offers, and a taste of convenience. Elevate your dining experience today at <span>HERE</span>.
                    </div>
                    <div className="text-[1vw] flex flex-row mt-[30px] space-x-[20px]">
                        <div className="w-[1px] border-[2px] border-black">

                    </div>
                    <div className="italic font-bold ">
                            Indulge in a hassle-free dining experience! Our restaurant reserve website ensures swift and simple 
                            table bookings, putting you in control. Enjoy VIP access to exclusive promotions and chef's specials. 
                            Say goodbye to waiting – secure your spot effortlessly online. 
                    </div>
                </div>
            </div>
        </div>
    )
}