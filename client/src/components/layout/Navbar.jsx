import React from 'react'
import {Link} from 'react-router-dom'
import CustomButton from '../customs/CustomButton'
import CustomArrow from '../customs/CustomArrow'
import { useNavigate } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";



const Navbar = () => {
    const navigate = useNavigate();

    function handleCall(){
        navigate('/contact')
    }

  return (
    <header className='w-full relative'>
        <div className='w-11/12 text-center mx-auto bg-[#505050] rounded-full py-4 p-5'>
            {/* main div */}
            <div className='flex justify-between items-center'>

                <div className='flex gap-2' >
                    {/* logo */}
                    <a href="">
                        <img src="" alt="" />
                    </a>
                    <Link to={'/'}  className='text-[#DB4A2B] font-extrabold text-[2.2rem]'>UNARROW.</Link>
                </div>

                {/* nav-links */}
                <nav className='flex gap-10 text-[1.34063rem] justify-center text-black font-semibold'>
                    <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={'/'}>Home</Link>
                    <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={'/service'}>Services</Link>
                    <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={'/aboutus'}>About Us</Link>
                    <Link className="hover:text-[#DB4A2B] duration-300 transition-all" to={'careers'}>Careers</Link>
                </nav>

                {/* button */}
                <div onClick={handleCall} className='flex justify-center items-center  '>
                    <CustomButton label={'Book a Call'}/>
                    <CustomArrow icon={<TiArrowRight/>}/>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Navbar;