import React from 'react'

const Card = () => {
    return (
        <div className='py-5 z-50 group px-5 bg-white hover:border-[1px] border-[1px] border-transparent hover:border-blue-500 transition-all duration-500 cursor-pointer  shadow-md rounded-md '>

            <div className='flex justify-between'>
                <h2 className='font-medium text-[15px] group-hover:text-blue-700'>Ai Logo Generator</h2>
                <div className='flex  gap-x-4'>
                    <div className='flex flex-col  items-center'>
                        <h4 className='font-semibold text-blue-700 text-lg'>450K</h4>
                        <h5 className='text-[13px] text-gray-500'>Volume</h5>
                    </div>
                    <div className='flex flex-col  items-center'>
                        <h4 className='font-semibold text-green-600 text-lg'>+99X+</h4>
                        <h5 className='text-[13px] text-gray-500'>Growth</h5>
                    </div>
                </div>
            </div>
               
               


            <div className='mt-10'>
                <p className='text-[13px] text-gray-500'>A software tool that uses artificial intelligence to generate custom logos for individuals and businesses, allowing them  </p>
                <button className='mt-8 text-[10px] text-gray-500 border-[1px] border-gray-200 bg-gray-100 px-1 py-1'>
                    EXPLODING
                </button>
            </div>


        </div>
    )
}

export default Card