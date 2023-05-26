import Image from "next/image"
import Link from "next/link"
const Navbar = () => {
    return(
        <div className=" fixed  z-10 flex justify-center w-[100vw] bg-[#F2F6FF] h-[100px] items-center">
            <div>
                <Link href={"/"}><Image src={"/logo.png"} alt="nutlip logo" width={162.74} height={36.34}/></Link>
            </div>
            
        </div>
    )

}
export default Navbar