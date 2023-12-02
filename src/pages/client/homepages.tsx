
import { useQuery } from '@tanstack/react-query';
import { GetProducts } from '../../api/products';
import { IProduct } from '../../types/products';
import Slide from '../../components/slide';

export const Homepages = () => {

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['PRODUCT_KEY'],
        queryFn: async () => {
            const { data } = await GetProducts()
            return data
        },

    })
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Eroor...</div>
    return (
        <div >
            <Slide />
            <div className='mx-[80px]'>
                <div className='flex mx-auto justify-between my-8'>
                    <hr className='border w-[450px] my-auto' />
                   <div className='flex text-[#ad8444] text-2xl leading-5 '>
                   <i className="fa-solid fa-star"></i>
                    <h2 className='font-bold'>SẢN PHẨM NỔI BẬT </h2>
                   </div>
                    <hr className='border w-[450px] my-auto' />
                </div>

                <main className='grid grid-cols-4 gap-5 '>
                    {products?.map((item: IProduct) => (
                        <a href={`/products/${item.id}`} key={item.id}>
                            <div className=' p-4  shadow-md mt-[10px] '>
                                <div className='border-4 border-[#ad8444] overflow-hidden h-full'>
                                <img src={item.image} alt={item.name} className='h-[250px] w-full  transform transition-transform hover:scale-110' />
                                </div>
                                <h1 className='text-[18px] text-[#ad8444] my-[10px] font-medium'>{item.name}</h1>
                                <p className='text-[15px] font-semibold text-[red]'>{item.price} đ</p>
                               <a href="/cart"> <button className='w-[200px] border-2 border-[#ad8444] h-[40px] font-semibold text-[#ad8444] mt-[10px] hover:bg-[#ad8444] hover:text-[white]'>
                                    Thêm vào giỏ hàng
                                </button></a>
                            </div>
                        </a>
                    ))}
                </main>
            </div>
        </div>
    );
};
