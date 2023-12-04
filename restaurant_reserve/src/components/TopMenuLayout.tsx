import styles from "@/styles/Font.module.css"

export default function TopMenuLayout(){
    return (
        <div className="w-screen h-[30px] px-[5%]">
            <div className={`${styles.fontQuestrial} font-bold text-[17px]  flex items-center
            border-black border-b-[1px]`}>
                <div>
                    CHANAGUN GROUP
                </div>
            </div>
        </div>

    )
}