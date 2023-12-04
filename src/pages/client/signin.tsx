import { useForm, SubmitHandler } from "react-hook-form";
import { sign_in } from "../../api/users";
import { IPusers } from "../../types/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IPusers>();

  const next = useNavigate();
  const queryClient = useQueryClient();



  const { mutate } = useMutation({
    mutationFn: async (data: IPusers) => {
      return sign_in({ ...data });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries();
      if (data.data?.user.role == 1) {
        localStorage.setItem('id', data.data.user.id)
        localStorage.setItem('role', data.data.user.role)
        localStorage.setItem('username', data.data.user.username);
        alert("Đăng nhập thành công");
        next('/admin');
      } else {
        localStorage.setItem('id', data.data.user.id)
        localStorage.setItem('role', data.data.user.role)
        localStorage.setItem('username', data.data.user.username);
        alert('Đăng nhập thành công quyền member');
        next('/');
        window.location.reload()
      }
    },
    onError: (error) => {
      alert("Email hoặc password không đúng");
      console.log(error.message);
    }
  });

  const onhanldeSubmit: SubmitHandler<IPusers> = (data: IPusers) => {
    mutate(data);

  };

  return (
    <div className="py-[135px]">
      <div className="bg-[#f7f7f7] h-[70px] text-center">
        <h1 className="text-3xl font-bold py-4">MY ACCOUNT</h1>
      </div>
      <div className=" mx-[80px]">
        <h1 className="text-xl font-bold mt-4"> ĐĂNG NHẬP</h1>
        <form action="" onSubmit={handleSubmit(onhanldeSubmit)} className="mt-[20px]">
          <div className="my-[20px]">
            <div className="text-base font-semibold">Tên tài khoản hoặc địa chỉ email *</div>
            <input type="text"  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />
            {errors.email && errors.email.type === "required" && (
              <p className="text-[red]">Vui lòng nhập dữ liệu cho trường này !</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="text-[red]">Vui lòng nhập đúng định dạng email!</p>
            )}
          </div>
          <div>
            <div className="text-base font-semibold">Mật Khẩu </div>
            <input type="password"  {...register("password", { required: true })} className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />
            {errors.password && <p className="text-[red]">Vui lòng nhập dữ liệu cho trường này !</p>}
          </div>
          <div className="my-[20px]">
            <input type="checkbox" name="" id="" />
            <span className="ml-[10px] text-base font-semibold">Ghi nhớ mật khẩu</span>
          </div>
          <div>
            <button className="w-[120px] h-[40px] bg-[#ad8444] text-[white] font-semibold hover:bg-[#8f6849]"> Đăng Nhập</button>
          </div>
          <div className="mt-[10px]">
            <a href="">  <h2 className="text-[#ad8444] font-sm">Quên mật khẩu?</h2></a>
          </div>
        </form>
       
      </div>
    </div>
  );
};
