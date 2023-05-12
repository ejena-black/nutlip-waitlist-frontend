import Image from "next/image";
import waitlist from "../../public/waitlist1.png";
import arrow from "../../public/arrow.png";
const Waitlist = () => {
    return(
        <div className=" lg:flex w-full">
            <div className=" xl:w-[640px]">
                <Image 
                src={waitlist}
                alt="image"
                />
            </div>  
            <div className=" w-full lg:w-[800px] bg-[#001F6D] flex justify-center py-10">
                <div className=" w-full lg:w-[448px] text-[#FFFFFF]">
                    <div className="px-[8%] font-unbounded flex gap-6 mt-10 mb-12 text-[24px] items-center">
                        <Image
                        src={arrow} 
                        />
                        <span>Join the waitlist</span>
                        
                    </div>
                   
                   
                    <div className=" px-[8%] font-urbanist mb-[13px]">
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
                         >
                            <option disabled>What best describes you</option>
                            <option>Property seeker</option>
                            <option>Real estate agent</option>
                            <option>Mortgage broker</option>
                            <option>Solicitor</option>
                         </select>
                    </div>
                    <div className=" px-[8%] font-urbanist mb-[13px]">
                        <span className=" text-[16px] leading-[19px] font-extralight">Suggestion box</span>
                        <textarea 
                        className=" h-[109px] rounded-[8px] block text-[#505050] p-[16px] w-full lg:text-[18px]"
                        placeholder="What feature or problem will you like our platform to add or solve?"
                         />
                    </div>

                    <div className=" mt-16 flex gap-[8px] px-[8%] w-full">
                        <div className=" text-[18px] w-[148px] rounded-[8px] border-2 p-[16px] text-center">Learn more</div>
                        <div className=" w-[186px] text-[18px] rounded-[8px] lg:w-[292px] bg-[#DA0025] p-[16px] text-center">Join our waitlist</div>
                    </div>

                </div>
                
            </div>  
        </div>
    )

}
export default Waitlist;