import Image from "next/image"
const Navbar = () => {
    return(
        <div className=" flex justify-center w-[100vw] bg-[#F2F6FF] h-[122px] items-center">
            <div>
                <Image src={"/logo.png"} alt="nutlip logo" width={162.74} height={36.34}/>
            </div>
            
        </div>
    )

}
export default Navbar