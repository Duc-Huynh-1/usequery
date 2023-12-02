import { useState } from "react";
import { Delete, GetProducts } from "../../api/products";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../../types/products";

export const List_products = () => {
    const { data: products, isLoading, isError, refetch } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await GetProducts();
            return data;
        },
    });

    const [searchTerm, setSearchTerm] = useState("");

    const handleRemove = (id: number) => {
        const tb = window.confirm("Bạn có muốn xóa hay không!");
        if (!tb) return;
        Delete(id)
            .then(() => {
                alert("Xóa thành công");
                refetch();
            })
            .catch((error) => {
                alert("Xóa thất bại. Hãy thử lại sau.");
                console.error(error);
            });
    };

    const filteredProducts = products?.filter((product: IProduct) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) return <div>Loading... </div>;
    if (isError) return <div>Error ... </div>;

    return (
        <>
            <div>
                <div>
                    <a href="/admin/Managas/add">
                        <button className='w-[100px] h-[30px] border my-[20px] shadow-md font-semibold hover:bg-[#ad8444] hover:text-[white]'>
                            Add
                        </button>
                    </a>
                    <input
                    className="ml-[50px] border"
                        type="text"
                        placeholder="Tìm kiếm theo tên sản phẩm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* 1 */}
                    <table>
                        <thead className="">
                            <tr className='text-center border'>
                                <th className='w-[100px] border'>#</th>
                                <th className='w-[200px] border'>Name</th>
                                <th className='w-[300px] border'>Image</th>
                                <th className='w-[200px] border'>Price</th>
                                <th className='w-[200px] border'>Desc</th>
                                <th className='w-[300px] border'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts?.map((item: IProduct) => (
                                <tr className='text-center my-[10px]' key={item.id}>
                                    <td className="border">{item.id}</td>
                                    <td className="border w-[300px]">{item.name}</td>
                                    <td className="border w-[300px]">
                                        <img src={item?.image} alt={item.name} className="" />
                                    </td>
                                    <td className="border">{item.price}</td>
                                    <td className="border w-[300px]">{item.desc}</td>
                                    <td className="border w-[200px]">
                                        <button
                                            onClick={() => handleRemove(item.id!)}
                                            className="border w-[80px] h-[40px] text-[16px] font-medium bg-[#ad8444] text-[white]">
                                            Delete
                                        </button>
                                        <a href={`/admin/Managas/edit/${item.id}`}>
                                            <button className="border w-[80px] h-[40px] text-[16px] font-medium bg-[red] text-[white]">
                                                Edit
                                            </button>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </>
    );
};
