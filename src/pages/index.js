import Image from 'next/image';
import bg from '../../public/building.png';
import styles from "../styles/Home.module.css";
import fb from '../../public/facebook.png';
import ig from '../../public/instagram.png';
import tw from '../../public/twitter.png';
import lk from '../../public/linkedin.png';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const [formData, setFormData] = useState({
    email: ''
});

const router = useRouter();

const handleChange = (event) => {
  setFormData({ ...formData,[event.target.name]: event.target.value});
}

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
      // Make a POST request to your backend server
      const response = await fetch('https://nutlip-waitlist.onrender.com/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
     

    
      if (response.ok) {
        // Handle successful form submission
        console.log('Form submitted successfully!');
        // Reset the form fields
        setFormData({ email: ''
          });

          // Move to waitlist page
          router.push('/waitlist');


      } else {
        // Handle error response from the server
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('An error occurred during form submission:', error);
    }
};

  return (
    <main className={styles.main}>
    <main className={styles.hero}>
      <div className=' z-[-1%] flex flex-col mm:mt-36 lg:mt-32 gap-8 mt-16 md:px-2'>
        <div>

        </div>
          <div className=' text-[33.67px] md:text-[54px] lg:text-[54px]  flex justify-center'>
              <span className='  md:w-[769px] lg:w-[769px] leading-[41.75px] font-unbounded block text-center lg:leading-[66.96px] tracking-wide'>Revolutionary property search portal </span>
              {/* <div className='bg-transparent relative right-56 top-8 flex items-center z-[0] '>
                <svg width="230" height="84" viewBox="0 0 230 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M119.306 6.97288C119.306 6.97288 21.5862 23.0512 4.10643 51.1345C-23.5478 95.5642 230.27 90.9711 227.985 44.1616C225.922 1.91947 43.2308 26.6388 43.2308 0" stroke="#DA0025" stroke-width="4"/>
                </svg>
              </div> */}
            
            </div>

            <div className=' flex justify-center'>
              <span 
              className=' lg:w-[692px] w-[353px] text-[16px] text-center leading-[19.2px] font-urbanist block lg:text-[18px] lg:leading-[21.6px] tracking-normal'>
              Join the waitlist and discover what sets us apart from the rest.
              Our platform is being designed to serve Property seekers, Landlords, Estate agents, Mortgage brokers and
              Conveyancers. Join us to build that product that serves you better.
              </span>
            </div>

            <form onSubmit={(e) => handleSubmit(e)}
             className=' mt-2 lg:flex px-[8%] flex-col  md:flex-row justify-center lg:gap-[10px] font-urbanist lg:mt-4'>
              <input 
              type= "email"
              name="email"
              value={formData.email}
              onChange={handleChange}

              className=' p-[16px] w-full lg:w-[433px] text-black rounded-[8px] bg-[#E7E7E7] border-2 border-[#E7E7E7]' placeholder='Email address' required/>
              <button
              type="submit"
              className=' mt-4 lg:mt-0 text-[18px] bg-[#da0025] w-[240px] p-[16px] rounded-[8px]'>Get early access</button>
            </form>
      </div>


        <div className='flex justify-center text-[18px] font-urbanist mt-6 lg:mt-8'>
          <p>Are you an investor? <span className=' underline cursor-pointer'><Link href={"/invest-form"}>Click here</Link></span></p>
        </div>
        <div className=' flex items-center lg:gap-[64px] gap-[56px] mt-6 justify-center lg:mt-6 mb-36'>
          <div className=' w-[24px] h-[24px]'>
            <Link href=""><Image src={fb} /></Link>
          </div>
          <div className=' w-[24px] h-[24px] flex items-center'>
            <Link href="https://instagram.com/official_nutlip?igshid=MzNlNGNkZWQ4Mg=="><Image src={ig} height={21} width={21}/></Link>
          </div>
          <div className=' w-[24px] h-[24px]'>
            <Link href="https://twitter.com/Nutlip_?t=jKIi6O2rnVI4woYCa33TyQ&s=09"><Image src={tw}/></Link>
          </div>
          <div className=' w-[24px] h-[24px]'>
            <Link href="https://www.linkedin.com/in/nutlip-property-search-portal-4b7a52274"><Image src={lk}/></Link>
          </div>
        </div>
       
        
    </main>
    </main>
  )
}
