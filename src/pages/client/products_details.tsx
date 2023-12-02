import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductsByid } from "../../api/products";
import { IProduct } from "../../types/products";

export const Products_details = () => {
    const { id } = useParams();
    const [products, setProduct] = useState<IProduct>();
    useEffect(() => {
        const fetchData = async (id: number) => {
            const response = await GetProductsByid(id);
            setProduct(response.data);
        };
        fetchData(Number(id));
    }, [id]);

    return (
        <div>
            <div>
                {products && (
                    <div className="flex  pt-[180px] mx-[200px]">
                        <div className='border-4 border-[#ad8444] overflow-hidden h-full'>
                            <img src={products.image} alt={products.name} className='h-[350px] w-[350px]  transform transition-transform hover:scale-110' />
                        </div>
                        <div className="ml-[50px]">
                            <div>
                                <a href="/" className="text-[#666666D9] hover:text-[#000] font-medium">TRANG CHỦ </a>/ <a href="" className="text-[#666666D9] hover:text-[#000] font-medium">{products.name}</a>
                            </div>
                            <h1 className="text-2xl font-bold mt-[10px]"> {products.name}</h1>
                            <p className="text-[20px] font-semibold text-[red] my-[10px]"> {products.price} đ</p>
                            <p className="text-xl font-semibold">Mô tả  : {products.desc}</p>
                            <div className="mt-[20px] flex ">
                                <div className="flex">
                                    <button className="w-[30px] border h-[50px]  text-xl hover:bg-[#666666b9] bg-[#ddd]">+</button>
                                    <input type="text" className="border w-[40px] h-[50px] text-center" value={1}/>
                                    <button className="w-[30px] border h-[50px]  text-xl hover:bg-[#666666b9] bg-[#ddd]">-</button>
                                </div>

                                <div className="ml-[30px]">
                                    <button className="w-[200px] border h-[50px]  text-xl hover:bg-[#b71f1f] bg-[red] text-[white] font-semibold ">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

