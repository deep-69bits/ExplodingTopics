import React from 'react'
import { LOGO } from '../SVGS'

const Footer = () => {
    return (
        <div className='z-50'>
            <hr />

            <div className='py-20'>

                <div className='lg:flex block w-full lg:px-0 px-6  gap-x-60 lg:max-w-7xl mx-auto'>
                    <div><LOGO /></div>
                    <div>
                        <div className='lg:flex grid grid-flow-row grid-cols-2 justify-between  lg:mt-0 mt-10 lg:gap-x-40'>
                            <div>
                                <h5 className='text-lg font-semibold'>Explore</h5>
                                <h6 className='my-5 text-sm text-[#595D73] hover:underline cursor-pointer'>Add a Topic</h6>
                                <h6 className='my-5 text-sm text-[#595D73] hover:underline cursor-pointer'>Newsletter</h6>
                                <h6 className='my-5 text-sm text-[#595D73] hover:underline cursor-pointer'>Blog</h6>
                                <h6 className='my-5 text-sm text-[#595D73] hover:underline cursor-pointer'>Affiliates</h6>
                            </div>
                            <div>
                                <h5 className='text-lg font-semibold'>Company</h5>
                                <h6 className='my-5 text-sm text-[#595D73] hover:underline cursor-pointer'>Home</h6>
                                <h6 className='my-5 text-sm text-[#595D73] hover:underline cursor-pointer'>About</h6>
                                <h6 className='my-5 text-sm text-[#595D73] hover:underline cursor-pointer'>Contact</h6>
                            </div>
                            <div>
                                <h5 className='text-lg font-semibold'>Connect</h5>
                                <h6 className='my-5 text-sm text-[#595D73] hover:underline cursor-pointer line-clamp-2'>548 Market St. Suite 95149 <br />
                                    San Francisco, California</h6>
                            </div>
                        </div>
                        <div className='mt-5 text-sm text-[#595D73] hover:underline cursor-pointer lg:flex justify-between'>
                            <div className='lg:gap-x-4 gap-x-10 lg:mb-0 mb-5  flex items-center'>
                                <span>Privacy Notice</span>
                                <span>Terms of Service</span>
                            </div>
                            <div>
                            © 2024  Exploding Topics
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer