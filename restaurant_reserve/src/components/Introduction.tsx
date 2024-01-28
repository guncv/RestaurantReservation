import styles from "@/styles/Font.module.css"
import Image from "next/image"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default async function Introduction(){
    // const session = await getServerSession(authOptions);
    // if (!session || !session.user.token) return null
    // const profile = await getUserProfile(session?.user.token);
    // var createdAt = new Date(profile.data.createdAt)
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
                {/* <div>
                    <table className="table-auto border-separate border-spacing-2 m-5 p-5 w-full">
                        <tbody className="justify-center items-center">
                            <tr>
                                <td>Email</td>
                                <td>{profile.data.email}</td>
                            </tr>
                            <tr>
                                <td>Tel</td>
                                <td>{profile.data.tel}</td>
                            </tr>
                            <tr>
                                <td>Member Since</td>
                                <td>{createdAt.toString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
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