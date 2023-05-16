import Image from "next/image";
// import invest from "../../public/invest1.png";
import styles from "../styles/Home.module.css";
import arrow from "../../public/arrow.png";
import { useState } from "react";
const InvestForm = () => {
    const [showodal, setShowModal] = useState(false);
    const [showSubmit, setShowSubmit] = useState(false);

    return(
        <div className=" lg:flex w-full">
            <div className={styles.invest_image}>
            </div>  
            <div className="  w-full h-[904px] lg:w-[800px] lg:h-[781px] bg-[#001F6D] flex justify-center">
                <div className=" w-full lg:w-[448px] text-[#FFFFFF] flex flex-col gap-[48px]">
                    <div className="px-[8%] lg:px-0 font-unbounded mt-[48px] flex gap-6 text-[24px] items-center">
                        <Image
                        src={arrow} 
                        />
                        <span>Invest with nutlip</span>
                        
                    </div>

                    <form className="flex flex-col gap-[48px]">
                    <div className="flex flex-col gap-[16px] lg:w-[433px] font-urbanist">
                        <div className=" px-[8%] lg:px-0 flex flex-col gap-[8px]">
                                <span className=" text-[16px] leading-[19px] font-extralight">Full name</span>
                                <input 
                                className=" rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                                type="text"
                                placeholder="Full name"/>
                        </div>
                        <div className="  px-[8%] lg:px-0 flex flex-col gap-[8px]">
                                <span className=" text-[16px] leading-[19px font-extralight">Company</span>
                                <input 
                                className=" rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                                type="text"
                                placeholder="Company name"/>
                        </div>
                        <div className="  px-[8%] lg:px-0 flex flex-col gap-[8px]">
                                <span className=" text-[16px] leading-[19px]  font-extralight">What best describes you</span>
                                <select 
                                className=" rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                                placeholder="Company name">
                                    <option disabled>What best describes you</option>
                                    <option>Individual</option>
                                    <option>Corporate</option>
                                    <option>Venture capital</option>
                                    <option>Others</option>
                                </select>
                        </div>
                        <div className=" px-[8%] lg:px-0 flex flex-col gap-[8px]">
                                <span className=" text-[16px] leading-[19px] font-extralight">Comments</span>
                                <textarea 
                                className=" h-[109px] rounded-[8px] block text-[#505050] p-[16px] w-full text-[18px]"
                                />
                        </div>
                    </div>
                    <div>
                            <div className="lg:px-0 flex gap-[8px] px-[8%] w-full">
                                <div onClick={() => setShowModal(true)} className=" cursor-pointer text-[18px] w-[148px] rounded-[8px] border-2 p-[16px] text-center">Learn more</div>
                                <button onClick={() => setShowSubmit(true)} className=" cursor-pointer w-[186px] text-[18px] rounded-[8px] lg:w-[292px] bg-[#DA0025] p-[16px] text-center">Submit</button>
                            </div>
                    </div>
                   </form>
                    
                </div>
               
                {
                    showodal? (
                        <div className=" absolute lg:fixed inset-0 flex justify-center">
                            <div className=" relative px-[16px] w-[342px] h-[950px] lg:px-[87.5px] bg-[#F2F6FF] lg:w-[818px] xl:h-[644px] rounded-[32px] font-urbanist">
                                <div onClick={()=>setShowModal(false)} className=" cursor-pointer text-[20.4px] font-bold mt-[76.5px] flex justify-end">X</div>
                        
                                <div className=" flex flex-col gap-[16px]">
                                    <p className=" font-bold text-[18px] leading-[21.6px]">Invest with nutlip</p>
                                    <div className=" w-[310px] lg:w-[643px] text-[14px] flex flex-col leading-[16.8px] lg:gap-[16px] gap-[10px]"><p>Introducing our exciting new property search portal in order to garner your interest for investment. Our platform seeks to revolutionize the way people search for and invest in real estate properties. We are also leveraging blockchain technology and continue to develop it to ensure quick and transparency of transactions for both users and agents listing on the platform.</p>

                                        <p>We are leveraging technology to create a database of properties that is continually updated with real-time data, ensuring that our users have access to the most relevant and up-to-date property listings.</p>

                                        <p>Our platform will also be providing users with numerous tools to help them make informed decisions about their property purchase, such as detailed property information, location-based insights, and access to experts and resources. We believe that with our platform, users will no longer have to spend endless hours scouring the internet for properties that may or may not meet their needs. Instead, they can trust our platform to help them find and secure their dream property.</p>

                                        <p>We are currently seeking investment to help us bring our platform to the market and scale our operations beyond the shores of the United Kingdom and Europe to the United States of America. We have a talented team with extensive experience in technology and real estate, and we believe that with your investment, we can take our platform to the next level and achieve our growth and expansion goals.</p>

                                        <p>Investing in our platform represents a unique opportunity to be a part of a disruptive and innovative company that is poised to transform the real estate industry. We are confident that our platform will have a positive impact on the lives of many people, and we would be honoured to have you join us on this journey.</p>
                                    </div>
                                </div>
                

                            </div>
                        </div>
                    ) : null
                }
                {
                    showSubmit? (
                        <div className=" fixed inset-0 flex justify-center">
                            <div className=" w-[340px] px-[87.5px] bg-[#F2F6FF] lg:w-[592px] lg:h-[644px] rounded-[32px] font-urbanist">
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
export default InvestForm;