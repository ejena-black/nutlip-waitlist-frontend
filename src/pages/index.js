import Image from 'next/image';
import bg from '../../public/building.png';
import styles from "../styles/Home.module.css";
import fb from '../../public/facebook.png';
import ig from '../../public/instagram.png';
import tw from '../../public/twitter.png';
import lk from '../../public/linkedin.png';


export default function Home() {
  return (
    <main>
    <main className={styles.hero}>
    {/* className='bg-gradient-to-t from-[#3c5aa6] to-[#02133E] xl:h-[100vh] xl:w-[1572px] relative text-white' */}
       {/* <div className=" w-full h-full object-cover absolute mix-blend-overlay">
            <Image
              src={bg}
              alt='bg house'
              
            />
       </div> */}
       
        <div className=' lg:pt-24 text-[54px]'>
          <span className=' font-unbounded block text-center leading-[66.96px] tracking-wide'>Revolutionary <br/> property search portal </span>
        </div>

        <div className=' mt-6 flex justify-center'>
          <span className='text-[16px] leading-[19px] font-urbanist block text-justify lg:text-[18px] lg:leading-[21.6px] tracking-tighter'>Join the waitlist and discover what sets us apart from the rest. Our platform is being <br/> designed to serve Property seekers, Landlords, Estate agents, Mortgage brokers and <br/>Conveyancers. Join us to build that product that serves you better.</span>
        </div>
        <div className='flex justify-center gap-[10px] mt-12 font-urbanist'>
          <input className=' p-[16px] w-[433px] text-black rounded-[8px] bg-[#E7E7E7] border-2 border-[#E7E7E7]' placeholder='Email address' type='text'/>
          <button className=' text-[18px] bg-[#da0025] w-[240px] p-[16px] rounded-[8px]'>Get early access</button>
        </div>
        <div className='flex justify-center text-[18px] font-urbanist mt-8'>
          <p>Are you an investor? <span className=' underline cursor-pointer'>Click here</span></p>
        </div>
        <div className=' flex items-center gap-[64px] justify-center mt-8'>
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
