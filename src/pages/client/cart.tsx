import { getCart, putCart } from "../../api/cart";
import { useQuery } from '@tanstack/react-query';
import { IProduct } from '../../types/products';

export const Cart = () => {
    const { data: cart, isLoading, isError } = useQuery({
        queryKey: ["CARTS"],
        queryFn: async () => {
            const response = await getCart();
            return response.data; // Kiểm tra cách dữ liệu được trả về từ API
        },
    });

    const username = localStorage.getItem('username')
    const cartFilter = cart?.find(u => u.username == username)

    const removeCart = (id:any) => {
        const newProduct = cartFilter?.products.filter(i => i.id != id)

        const newData = {
            ...cartFilter,
            products: [
                ...newProduct
            ]
        }
        putCart(cartFilter.id, newData).then(() => {
            alert('Xóa sản phẩm thành công!');
            window.location.reload()
        })
    }
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error...</div>;

    return (
        <div className="pt-[200px] mx-[80px]">
            {
                cartFilter == undefined
                    ? <img src="https://eherbalmarket.vn/assets/images/no-cart.png" alt="null" />
                    : <div>
                        <table >
                            <thead className="border-b-2 mb-4  ">
                                <tr className=''>
                                    <th className='w-[350px] flex text-sm'>SẢN PHẨM</th>
                                    <th className='w-[100px] text-sm'>GIÁ</th>
                                    <th className='w-[100px] text-sm'>SỐ LƯỢNG </th>
                                    <th className='w-[100px] text-sm'>TẠM TÍNH</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartFilter?.products?.map((item: IProduct) => (
                                    <tr className=' my-[10px]  text-center border-b py-2' key={item.id}>
                                        <div className="flex mx-[10px]">
                                            <div className="my-[28px] mr-[10px] cursor-pointer border-2 w-8 h-8 rounded-[50%] pt-[2px]">
                                                <i className="fa-solid fa-trash text-[#0000006d] " onClick={() => removeCart(item?.id)}></i>
                                            </div>
                                            <td className="py-[15px]">
                                                <img src={item?.image} alt={item.name} className="w-[90px] h-[90px]" />
                                            </td>
                                            <td className="my-[30px] ml-[20px] text-[#ad8444] text-base">{item.name}</td>
                                        </div>
                                        <td className=" font-semibold">{item.price}</td>
                                        <td className="">
                                            <div className="flex mx-[5px]">
                                                <button className="w-[25px] border h-[40px]  text-xl hover:bg-[#666666b9] bg-[#ddd]">+</button>
                                                <input type="text" className="border w-[35px] h-[40px] text-center" value={1} />
                                                <button className="w-[25px] border h-[40px]  text-xl hover:bg-[#666666b9] bg-[#ddd]">-</button>
                                            </div>
                                        </td>
                                        <td className=" font-semibold">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <div className="mt-[50px]">
                               <a href="/">
                               <button className="h-[35px] w-[250px] border-2 font-semibold text-sm border-[#ad8444] text-[#ad8444] hover:bg-[#ad8444] hover:text-[#fff]">
                                    <i className="fa-solid fa-arrow-left mr-[10px]"></i>
                                    TIẾP TỤC XEM SẢN PHẨM
                                </button>
                               </a>
                            </div>
                        </table>
                    </div>
            }
        </div>
    );
}
