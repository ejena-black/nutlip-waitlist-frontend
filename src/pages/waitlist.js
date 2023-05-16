import Image from "next/image";
import waitlist from "../../public/waitlist1.png";
import arrow from "../../public/arrow.png";
import { useState } from "react";
const Waitlist = () => {
    const [showodal, setShowModal] = useState(false);
    const [showSubmit, setShowSubmit] = useState(false);
    return(
        <div className=" lg:flex w-full">
            <div className=" xl:w-[640px] lg:h-full">
                <Image 
                src={waitlist}
                alt="image"
                />
            </div>  
            <div className=" w-full lg:w-[800px] bg-[#001F6D] flex justify-center py-10">
                <div className=" w-full lg:w-[448px] text-[#FFFFFF]">
                    <div className="px-[8%] lg:px-0 font-unbounded flex gap-6 mt-10 mb-12 text-[24px] items-center">
                        <Image
                        src={arrow} 
                        />
                        <span>Join the waitlist</span>
                        
                    </div>
                   
                   
                    <div className=" px-[8%] lg:px-0 font-urbanist mb-[13px]">
                        <span className=" text-[16px] leading-[19px] font-extralight">Full name</span>
                        <input 
                        className=" rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                         type="text"
                         placeholder="Full name"/>
                    </div>
                    <div className=" px-[8%] lg:px-0 font-urbanist mb-[13px]">
                        <span className=" text-[16px] leading-[19px font-extralight">Company</span>
                        <input 
                        className=" rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                         type="text"
                         placeholder="Company name"/>
                    </div>
                    <div className=" px-[8%] lg:px-0 font-urbanist mb-[13px]">
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
                    <div className=" px-[8%] lg:px-0 font-urbanist mb-[13px]">
                        <span className=" text-[16px] leading-[19px] font-extralight">Suggestion box</span>
                        <textarea 
                        className=" h-[109px] rounded-[8px] block text-[#505050] p-[16px] w-full lg:text-[18px]"
                        placeholder="What feature or problem will you like our platform to add or solve?"
                         />
                    </div>

                    <div className=" mt-16 lg:px-0 flex gap-[8px] px-[8%] w-full">
                        <div onClick={() => setShowModal(true)} className=" cursor-pointer text-[18px] w-[148px] rounded-[8px] border-2 p-[16px] text-center">Learn more</div>
                        <div onClick={() => setShowSubmit(true)} className=" cursor-pointer w-[186px] text-[18px] rounded-[8px] lg:w-[292px] bg-[#DA0025] p-[16px] text-center">Join our waitlist</div>
                    </div>

                </div>

                {
                    showodal? (
                        <div className=" fixed lg:fixed inset-0 flex justify-center">
                            <div className=" px-[16px] w-[342px] h-[1470px] xl:px-[45px] bg-[#F2F6FF] xl:w-[1104px] xl:h-[644px] rounded-[32px] font-urbanist">
                                <div onClick={()=>setShowModal(false)} className=" cursor-pointer text-[20.4px] font-bold mt-[62px] flex justify-end">X</div>
                                <div className=" flex flex-col xl:flex-row lg:flex lg:gap-[32px]">
                                    <div className=" flex flex-col gap-[24px]">
                                        <div className=" w-[310px] flex flex-col gap-[16px] xl:w-[491px]">
                                            <p className=" text-[18px] leading-[21.6px] font-semibold">Property seekers</p>
                                            <p className=" text-[14px] leading-[16.8px]">Are you tired of clunky and confusing property search portals with less distinction of property display features as seen in many today? Join our waitlist today and be the first to experience our exciting new platform. Not only will you get an exclusive sneak peek, but you could also be selected as one of the lucky few to help us build the product. Join our community of forward-thinking individuals and revolutionize the way we search for properties. Sign up now for your chance to make an impact with Nutlip.</p>
                                        </div>
                                        <div className=" w-[310px] flex flex-col gap-[16px] xl:w-[491px]">
                                            <p className=" text-[18px] leading-[21.6px] font-semibold">Mortgage Brokers</p>
                                            <p className=" text-[14px] leading-[16.8px]">Are you a mortgage broker tired of endless searching for potential clients? Welcome to the ultimate property search portal that not only provides you with leads but help to streamline the entire process from leads to mortgage in principle for clients. With our platform, you won't have to waste your precious time on endless searches for leads as we ensure you receive high-quality leads to help you grow your business. We are excited to announce that we are offering an amazing promotion for the first 1000 mortgage brokers who join our waitlist and subscribe to our platform during and after launch. We are waiving all commission fees for these brokers so they can increase their profits while enjoying our exceptional services. With our cutting-edge technology and user-friendly interface, mortgage brokers can now access a seamless platform that streamlines the lending process, greatly reducing the time and effort required to close deals. By taking advantage of this promotion, brokers will have access to a platform that is designed to make their work easier, faster, and more efficient.</p>
                                        </div>

                                    </div>
                                    <div className=" flex flex-col gap-[24px] xl:mt-0 mt-[24px]">
                                        <div className=" w-[310px] flex flex-col gap-[16px] xl:w-[491px]">
                                            <p className=" text-[18px] leading-[21.6px] font-semibold">Estate Agents</p>
                                            <p className=" text-[14px] leading-[16.8px]">Our platform will be an intuitive, user-friendly, and a secured platform that focuses on providing more efficient and streamlined property search results amongst others increasing your lead conversion rate by 20% using our interactive Picture, Video and Virtual tour viewing windows, never before seen on any UK Property Search Portal. All these and more for less than £50 a month subscription. We are inviting all Estate Agents to join our waitlist, and as an added bonus, we will be giving the first 5000 estate agents that join the waitlist and subscribe to the platform during or after launch, a fantastic offer - 3 free premium listings a month for 1 year. This offer is just one of the ways we plan to reward our members for their trust and help them succeed in all their business endeavors.</p>
                                        </div>
                                        <div className=" w-[310px] flex flex-col gap-[16px] xl:w-[491px]">
                                            <p className=" text-[18px] leading-[21.6px] font-semibold">Solicitors/Conveyancers</p>
                                            <p className=" text-[14px] leading-[16.8px]">We designing an efficient and easy-to-use platform that not only helps home shoppers visiting the platform find their dream home or for investment, but also generates high-quality leads for solicitors. As a thank you to the first 500 conveyancers and solicitors who join our waitlist and subscribe to our platform during and after launch, we are proud to offer a special promotion. For an entire year, these early adopters will enjoy a no fee commission on all deals they initiate through our platform. This promotion is designed to make it more affordable for new members to take advantage of our unique features and help them reap the benefits of our platform.</p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    ) : null
                }
                
                {
                    showSubmit? (
                        <div className=" fixed inset-0 flex justify-center">
                            <div className=" px-[87.5px] bg-[#F2F6FF] xl:w-[592px] xl:h-[644px] rounded-[32px] font-urbanist">
                                <div onClick={()=>setShowSubmit(false)} className=" cursor-pointer text-[20.4px] font-bold mt-[76.5px] flex justify-end">X</div>
                                <div className="flex justify-center items-center">
                                    <div className=" w-[192px] h-[272px] flex flex-col items-end">
                                        <div className=" h-[192px] w-[192px]"></div>
                                        <div className="text-center">
                                            <p className=" font-bold text-[24px] leading-[28.8px]">Success</p>
                                            <p className=" text-[16px] leading-[19.2px]">Thank you for signing up</p>
                                        </div>
                                      
                                    </div>
                                </div>

                            </div>
                        </div>
                    ) : null
                }
            </div>  
        </div>
    )

}
export default Waitlist;