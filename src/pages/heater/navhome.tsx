import React from 'react'

export const Navhome = () => {
    return (
        <div className='w-[150px] shadow-xl text-center'>
            <nav>
                    <ul className=' items-center justify-center pb-[10px]'>
                        <li className=' hover:scale-105  h-[40px] py-[5px] mt-[10px]'><a href="" className='text-[18px] font-medium   '>Trang chủ </a></li>
                        <li className=' hover:scale-105  h-[40px] py-[5px] mt-[10px]'><a href="/products" className='text-[18px] font-medium   '>Sản Phẩm </a></li>
                        <li className=' hover:scale-105  h-[40px] py-[5px] mt-[10px]'><a href="" className='text-[18px] font-medium   '>Menu </a></li>
                        
                    </ul>
                </nav>
        </div>
    )
}