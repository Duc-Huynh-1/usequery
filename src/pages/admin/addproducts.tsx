import {useForm , SubmitHandler} from 'react-hook-form'
import { IProduct } from '../../types/products';
import { Add } from '../../api/products';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const Addproducts = () => {
   const {register , handleSubmit , formState: { errors }, } = useForm<IProduct>()
    const next = useNavigate()
    const queryClient = useQueryClient();

    const {mutate} = useMutation( {
        mutationFn : (data:IProduct)=>{
            return Add(data)
        },
        onSuccess: () => {
          queryClient.invalidateQueries(); 
          alert('Thêm mới thành công');
          next('/admin');
        },
      });
    
      const onhandleSubmit: SubmitHandler<IProduct> = (data) => {
        mutate(data);
      };

  
    return (
        <div className=' mt-[20px] text-center'>
            <div>
                <h1 className='text-3xl font-semibold'>Thêm mới sản phẩm !</h1>
            </div>
           
            <form action="" className='mt-[20px]' onSubmit={handleSubmit(onhandleSubmit)}>
                <div>
                    <label htmlFor="name">Tên</label>
                    <input type="text" className='border ml-[15px]'   {...register('name',{required:true})} />
                    {errors.name && <p>name không được bỏ trống</p>}
                </div>
               
                <div className='my-[20px]'>
                    <label htmlFor="image">Hình ảnh</label>
                    <input type="text" className='border ml-[15px]'  {...register('image',{required:true})}/>
                    {errors.image && <p>image không được bỏ trống</p>}
                </div>
                <div>
                    <label htmlFor="price">Giá</label>
                    <input type="number" className='border ml-[15px]'  {...register('price',{required:true})}   />
                    {errors.price && <p>price không được bỏ trống</p>}
                </div>
                <div className='my-[20px]'>
                    <label htmlFor="desc">Mô tả</label>
                    <input type="text" className='border ml-[15px]'  {...register('desc',{required:true})}   />
                    {errors.desc && <p>desc không được bỏ trống</p>}
                </div>
                <div>
                    <button className='w-[80px] h-[40px] border '>Gửi</button>
                </div>
            </form>
        </div>
    );
};
