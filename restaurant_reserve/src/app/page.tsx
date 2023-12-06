import CardCatalog from "@/components/CardCatalog";
import Introduction from "@/components/Introduction";
import RestaurantIntro from "@/components/RestaurantIntro";
import styles from "@/styles/Font.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-screen flex flex-row mt-[250px]"> 
        <Introduction/>
      </div>
      <div className="w-screen px-[5%] mt-[150px]">
        <hr className="border-slate-700 border-[1px]"></hr>
        <RestaurantIntro/>
      </div>
      <div className="w-screen px-[5%] mt-[150px]">
            <CardCatalog/>
      </div> 
    </main>
  )
}
