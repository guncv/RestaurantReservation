import CardCatalog from "@/components/CardCatalog";
import Introduction from "@/components/Introduction";
import RestaurantCatalogExample from "@/components/RestaurantCatalogExample";
import RestaurantIntro from "@/components/RestaurantIntro";
import styles from "@/styles/Font.module.css"
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-screen">
      <div className="w-full flex flex-row mt-[250px]"> 
        <Introduction/>
      </div>
      <div className="w-full px-[5%] mt-[150px]">
        <hr className="border-slate-700 border-[1px]"></hr>
        <RestaurantIntro/>
      </div>
      <div className="w-full px-[5%] mt-[150px]">
        <RestaurantCatalogExample/>
      </div>
      <div className="w-full">
        <Contact/>
      </div>
    </main>
  )
}
