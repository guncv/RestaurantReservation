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
        <div className="w-[29vw] h-[42vh] mt-[40px] border-black border-[1px] relative">
            <div className="h-[full] flex relative w-full overflow-hidden">
                <Image className="h-[31vh] w-full hover:scale-105 relative duration-300"
                src={picture}
                alt="Failed To Load Image"
                width={1000}
                height={1000}/>
                <div className={`${styles.fontQuestrial} left-2 bottom-2 text-[30px] relative text-white`}>
                    <div>
                        {name.toUpperCase()}
                    </div>
                    <div>
                        {name.toUpperCase()}
                    </div>
                </div>
            </div>

            {/* <div>

            </div> */}
        </div>
    )
}