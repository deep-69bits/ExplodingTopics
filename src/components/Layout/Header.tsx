import React from 'react'
import { LOGO } from '../SVGS'

const Header = () => {
    return (
        <div className='w-full z-50 lg:max-w-7xl lg:py-8 py-5 lg:px-0   mx-auto'>
            <div className='flex  z-50 justify-between items-center'>
                <div className='lg:scale-100  scale-90'><LOGO /></div>
                <div className='lg:flex hidden gap-x-14 items-center'>
                    <li className='list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black'>About</li>
                    <li className='list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black'>Newsletter</li>
                    <li className='list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black'>Blog</li>
                    <li className='list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black'>
                        <button className='bg-[#3176E8] text-white text-xs px-2 rounded-sm py-1'>
                            PRO
                        </button>
                    </li>
                </div>
                <div className='flex lg:hidden px-4 gap-x-4 items-center' >
                    <li className='list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black'>
                        <svg className='w-6 h-6' fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z" fillRule="evenodd"></path> </g></svg>
                    </li>
                    <li className='list-none font-semibold cursor-pointer text-[#595D73] text-sm hover:text-black'>
                        <button className='bg-[#3176E8] text-white text-xs px-2 rounded-sm py-1'>
                            PRO
                        </button>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header