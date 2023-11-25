import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../types/products";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { Updates, GetProducts } from "../../api/products";
import { useEffect } from "react";

export const Edit = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProduct>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ["PRODUCT_KEY"],
        queryFn: async () => {
            const { data } = await GetProducts();
            return data;
        },
    });

    const product = data?.find((pro: IProduct) => pro.id === Number(id));
    useEffect(() => {
        if (product) {
            reset(product);
        }
    }, [product, reset]);

    const { mutate } = useMutation({
        mutationFn: (data: IProduct) => {
            return Updates(data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries();
            alert("Update thành công");
            navigate("/admin");
        },
    });

    const onhandleSubmit: SubmitHandler<IProduct> = (data) => {
        mutate(data);
    };

    return (
        <div className="mt-20 text-center">
            <div>
                <h1 className="text-3xl font-semibold">Chỉnh sửa sản phẩm</h1>
            </div>

            <form className="mt-20" onSubmit={handleSubmit(onhandleSubmit)}>
                <div>
                    <label htmlFor="name">Tên</label>
                    <input
                        type="text"
                        className="border ml-15"
                        {...register("name", { required: "Tên không được bỏ trống" })}
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div className="my-10">
                    <label htmlFor="image">Hình ảnh</label>
                    <input
                        type="text"
                        className="border ml-15"
                        {...register("image", { required: "Hình ảnh không được bỏ trống" })}
                    />
                    {errors.image && (
                        <p className="text-red-500">{errors.image.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="price">Giá</label>
                    <input
                        type="number"
                        className="border ml-15"
                        {...register("price", { required: "Giá không được bỏ trống" })}
                    />
                    {errors.price && (
                        <p className="text-red-500">{errors.price.message}</p>
                    )}
                </div>

                <div className="my-10">
                    <label htmlFor="desc">Mô tả</label>
                    <input
                        type="text"
                        className="border ml-15"
                        {...register("desc", { required: "Mô tả không được bỏ trống" })}
                    />
                    {errors.desc && <p className="text-red-500">{errors.desc.message}</p>}
                </div>

                <div>
                    <button className="w-80 h-40 border" type="submit">
                        {/* {isLoading ? 'Đang xử lý...' : 'Gửi'} */} submit
                    </button>
                </div>
            </form>
        </div>
    );
};
