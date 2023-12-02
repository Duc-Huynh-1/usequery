import { useEffect, useState } from 'react'
import { IProduct } from '../../types/products'
import axios from 'axios'

export const Productslist = () => {
    const [products, setproducts] = useState<IProduct[]>([])

    useEffect(() => {
        axios.get(`http://localhost:3000/products`)
            .then(({ data }) => {
                setproducts(data);
            })
    }, [])
    return (
            <div className='py-[150px] px-[80px]'>
                <div className='my-[20px]'>
                    <h1 className='text-base font-semibold  '><a href="/" className='text-[#666666d9] hover:text-[#000]'>TRANG CHỦ </a> / SẢN PHẨM  </h1>
                </div>
                <table className=' '>

                    <thead>
                        <tr>
                            <th className='w-[100px] h-[40px] border'>#</th>
                            <th className='w-[300px] h-[40px] border'>name</th>
                            <th className='w-[400px] h-[40px] border'>image</th>
                            <th className='w-[300px] h-[40px] border'>price</th>
                            <th className='w-[300px] h-[40px] border'>desc</th>
                            <th className='w-[300px] h-[40px] border'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr className='text-center' key={item.id}>
                                <td className='w-[100px] h-[40px] border'>{item.id}</td>
                                <td className='w-[300px] h-[40px] border'>{item.name}</td>
                                <td className='w-[400px] h-[40px] border'><img src={item.image} alt="" className='mx-auto w-[200px] h-[200px]' /></td>
                                <td className='w-[300px] h-[40px] border'>{item.price}</td>
                                <td className='w-[300px] h-[40px] border'>{item.desc}</td>
                                <td className='w-[300px] h-[40px] border '>
                                   <a href={`/products/${item.id}`}><button className='w-[80px] h-[35px] bg-[#e69d9d] text-[white] font-semibold'>Chi Tiết</button></a>
                                </td>
                            </tr>
                        ))
                        }

                    </tbody>
                </table>
            </div>
    )
}