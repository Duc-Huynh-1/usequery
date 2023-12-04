import { useParams } from "react-router-dom";
import { GetProductsByid } from "../../api/products";
import { addCart, getCart, putCart } from "../../api/cart";
import { useQuery } from "@tanstack/react-query";
import { IPusers } from "../../types/users";
import {useState} from 'react'


export const Products_details = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    const { data: product } = useQuery({
        queryKey: ['getOne'],
        queryFn: async () => {
            const res = await GetProductsByid(Number(id))
            return res.data
        }
    })


    const { data: dataCart } = useQuery({
        queryKey: ['getCart'],
        queryFn: async () => {
            const res = await getCart()
            return res.data
        }
    })

    const username = localStorage.getItem('username')
    const idUser = localStorage.getItem('id')

    const addToCart = () => {
        const cartFilter = dataCart?.find((u: IPusers) => u.username == username)
        if (cartFilter) {
            const newData = {
                ...cartFilter,
                products: [
                    product,
                    ...cartFilter.products,
                ]
            };
            console.log(newData);
            // mutateAsync(cartFilter.id, newData);
            putCart(cartFilter.id, newData).then(() => {
                alert('Thêm  thành công!');
            })
        }else{
            const data = {
                "idUser": idUser,
                "username": username,
                "products": [
                    product
                ]
            }
            addCart(data).then(() => {
                alert('Thêm sản phẩm thành công!');
            })
        }
    };

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
      };
    
      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity((prevQuantity) => prevQuantity - 1);
        }
      }

    return (
        <div>
            <div className="flex  pt-[180px] mx-[200px]">
                <div className='border-4 border-[#ad8444] overflow-hidden h-full'>
                    <img src={product?.image} alt={product?.name} className='h-[350px] w-[350px]  transform transition-transform hover:scale-110' />
                </div>
                <div className="ml-[50px]">
                    <div>
                        <a href="/" className="text-[#666666D9] hover:text-[#000] font-medium">TRANG CHỦ </a>/ <a href="" className="text-[#666666D9] hover:text-[#000] font-medium">{product?.name}</a>
                    </div>
                    <h1 className="text-2xl font-bold mt-[10px] "> {product?.name}</h1>
                    <p className="text-[20px] font-semibold text-[red] my-[10px]"> {product?.price} đ</p>
                    <p className="text-xl font-semibold">Mô tả  : {product?.desc}</p>
                    <div className="mt-[20px] flex ">
                        <div className="flex">
                            <button className="w-[30px] border h-[50px]  text-xl hover:bg-[#666666b9] bg-[#ddd]" onClick={handleIncrement}>+</button>
                            <input type="text" className="border w-[40px] h-[50px] text-center" value={quantity} readOnly />
                            <button className="w-[30px] border h-[50px]  text-xl hover:bg-[#666666b9] bg-[#ddd]"  onClick={handleDecrement}>-</button>
                        </div>

                        <div className="ml-[30px]">
                            <button onClick={addToCart} className="w-[200px] border h-[50px]  text-xl hover:bg-[#b71f1f] bg-[red] text-[white] font-semibold ">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

