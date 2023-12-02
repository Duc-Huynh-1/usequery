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
            navigate("/admin/Managas");
        },
    });

    const onhandleSubmit: SubmitHandler<IProduct> = (data) => {
        mutate(data);
    };

    return (
        <div className=' mt-[20px] w-[1000px]'>
        <div>
          <h1 className='text-3xl font-semibold '>Update sản phẩm !</h1>
        </div>
  
        <form action="" className='mt-[20px]' onSubmit={handleSubmit(onhandleSubmit)}>
          <div>
            <div className="text-base font-semibold">Tên Sản Phẩm </div>
            <input type="text"  {...register("name", { required: true })} className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />
            {errors.name && <p className="text-[red]">Vui lòng nhập dữ liệu cho trường này !</p>}
          </div>
          <div className="my-[20px]">
            <div className="text-base font-semibold">Ảnh sản phẩm  </div>
            <input type="text"  {...register("image", { required: true})} className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />
            {errors.image && errors.image.type === "required" && (
              <p className="text-[red]">Vui lòng nhập dữ liệu cho trường này !</p>
            )}
          </div>
          <div>
            <div className="text-base font-semibold">Giá Sản Phẩm </div>
            <input type="number"  {...register("price", { required: true })} className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />
            {errors.price && <p className="text-[red]">Vui lòng nhập dữ liệu cho trường này !</p>}
          </div>
          <div className="my-[20px]">
            <div className="text-base font-semibold">Mô Tả </div>
            <input type="text"  {...register("desc", { required: true })} className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />
            {errors.desc && <p className="text-[red]">Vui lòng nhập dữ liệu cho trường này !</p>}
          </div>
          <div>
            <button className="w-[80px] h-[40px] bg-[#ad8444] text-[white] font-semibold hover:bg-[#8f6849]">Update</button>
          </div>
        </form>
      </div>
    );
};
