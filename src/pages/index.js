import Image from 'next/image';
import bg from '../../public/building.png';
import styles from "../styles/Home.module.css";
import fb from '../../public/facebook.png';
import ig from '../../public/instagram.png';
import tw from '../../public/twitter.png';
import lk from '../../public/linkedin.png';


export default function Home() {
  return (
    <main className={styles.main}>
    <main className={styles.hero}>
      <div className='flex flex-col lg:mt-20 gap-8 mt-24'>
          <div className='text-[33.67px] lg:text-[54px]  flex justify-center'>
              <span className='lg:w-[769px] leading-[41.75px] font-unbounded block text-center lg:leading-[66.96px] tracking-wide'>Revolutionary property search portal </span>
            </div>

            <div className=' flex justify-center'>
              <span 
              className=' lg:w-[692px] w-[353px] text-[16px] text-center leading-[19.2px] font-urbanist block lg:text-[18px] lg:leading-[21.6px] tracking-normal'>
              Join the waitlist and discover what sets us apart from the rest.
              Our platform is being designed to serve Property seekers, Landlords, Estate agents, Mortgage brokers and
              Conveyancers. Join us to build that product that serves you better.
              </span>
            </div>

            <div className=' mt-16 lg:flex px-[8%] flex-col lg:flex-row justify-center lg:gap-[10px] font-urbanist lg:mt-10'>
              <input className=' p-[16px] w-full lg:w-[433px] text-black rounded-[8px] bg-[#E7E7E7] border-2 border-[#E7E7E7]' placeholder='Email address' type='text'/>
              <button className=' mt-4 lg:mt-0 text-[18px] bg-[#da0025] w-[240px] p-[16px] rounded-[8px]'>Get early access</button>
            </div>
      </div>


        <div className='flex justify-center text-[18px] font-urbanist mt-16'>
          <p>Are you an investor? <span className=' underline cursor-pointer'>Click here</span></p>
        </div>
        <div className=' flex items-center lg:gap-[64px] gap-[56px] justify-center mt-16'>
          <div className=' w-[24px] h-[24px]'>
            <Image src={fb} />
          </div>
          <div className=' w-[24px] h-[24px] flex items-center'>
            <Image src={ig} height={21} width={21}/>
          </div>
          <div className=' w-[24px] h-[24px]'>
            <Image src={tw}/>
          </div>
          <div className=' w-[24px] h-[24px]'>
            <Image src={lk}/>
          </div>
        </div>
       
        
    </main>
    </main>
  )
}
