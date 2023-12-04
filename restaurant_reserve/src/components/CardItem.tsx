import Image from "next/image"
import styles from "@/styles/Font.module.css"

interface Props {
    picture:string
    name:string
    location:string
    tel:string
}

export default function CardItem({picture,name,location,tel} : Props){
    return (
        <div className="w-[32%] h-[440px] mt-[40px] border-black border-[1px] relative">
            <div className="h-[340px] w-full">
                <Image className="h-full w-full"
                src={picture}
                alt="Failed To Load Image"
                width={1000}
                height={1000}/>
                <div className={`${styles.fontQuestrial} text-[30px] relative text-white`}>
                    {name.toUpperCase()}
                </div>
            </div>
        </div>
    )
}