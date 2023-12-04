import CardCatalog from "@/components/CardCatalog";
import styles from "@/styles/Font.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mt-[160px]"> 
        <div className={`${styles.fontQuestrial} w-screen h-[60%] font-bold text-center`}>

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
        </div>

        <div className="flex justify-center flex-row mt-[100px] space-x-[20px]"> 
          <Image className="w-[400px] h-[500px] mt-[100px]"
          src="/img/banner1.jpg"
          alt="Failed To Load Picture"
          width={1000}
          height={1000}/>

        <Image className="w-[500px] h-[700px]"
          src="/img/banner2.jpg"
          alt="Failed To Load Picture"
          width={1000}
          height={1000}/>

        <Image className="w-[400px] h-[500px] mt-[100px]"
          src="/img/banner3.jpg"
          alt="Failed To Load Picture"
          width={1000}
          height={1000}/>
        </div>

        <div className="w-screen px-[5%] mt-[50px]">
          <CardCatalog/>
        </div>
      </div>
    </main>
  )
}
