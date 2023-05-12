import Image from "next/image";
import invest from "../../public/invest1.png";
import arrow from "../../public/arrow.png";
const InvestForm = () => {
    return(
        <div className=" lg:flex w-full">
            <div className=" xl:w-[640px]">
                <Image 
                src={invest}
                alt="image"
                />
            </div>  
            <div className=" w-full lg:w-[800px] bg-[#001F6D] flex justify-center py-10">
                <div className=" w-full lg:w-[448px] text-[#FFFFFF]">
                    <div className="px-[8%]  font-unbounded flex gap-6 mt-10 mb-12 text-[24px] items-center">
                        <Image
                        src={arrow} 
                        />
                        <span>Invest with nutlip</span>
                        
                    </div>
                   
                   
                    <div className=" px-[8%]  font-urbanist mb-[13px]">
                        <span className=" text-[16px] leading-[19px] font-extralight">Full name</span>
                        <input 
                        className=" rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                         type="text"
                         placeholder="Full name"/>
                    </div>
                    <div className=" px-[8%] font-urbanist mb-[13px]">
                        <span className=" text-[16px] leading-[19px font-extralight">Company</span>
                        <input 
                        className=" rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                         type="text"
                         placeholder="Company name"/>
                    </div>
                    <div className=" px-[8%] font-urbanist mb-[13px]">
                        <span className=" text-[16px] leading-[19px]  font-extralight">What best describes you</span>
                        <select 
                        className=" rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                         placeholder="Company name">
                            <option>What best describes you</option>
                         </select>
                    </div>
                    <div className=" px-[8%] font-urbanist mb-[13px]">
                        <span className=" text-[16px] leading-[19px] font-extralight">Comments</span>
                        <textarea 
                        className=" h-[109px] rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                         />
                    </div>

                    <div className=" px-[8%] mt-16 flex gap-[8px] w-full">
                        <div className=" text-[18px] w-[148px] rounded-[8px] border-2 p-[16px] text-center">Learn more</div>
                        <div className=" w-[186px] text-[18px] rounded-[8px] lg:w-[292px] bg-[#DA0025] p-[16px] text-center">Submit</div>
                    </div>

                </div>
                
            </div>  
        </div>
    )

}
export default InvestForm;