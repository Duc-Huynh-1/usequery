import { useForm, SubmitHandler } from "react-hook-form";
import { sign_up } from "../../api/users";
import { IPusers } from "../../types/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IPusers>();
  const next = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (data: IPusers) => {
      return sign_up({ ...data, role: 0, confirmpassword: undefined });
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
      alert("Đăng ký thành công ");
      next("/signin");
    },
    onError: (error) => {
      alert("Email đã tồn tại");
      console.log(error.message);
      
    },
  });

  const onhanldeSubmit: SubmitHandler<IPusers> = (data: IPusers) => {
    if (data.password !== data.confirmpassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp");
      return;
    }
    mutate(data);
  };

  return (
    <div className="py-[150px] mx-[80px]">
      <form action="" onSubmit={handleSubmit(onhanldeSubmit)} className="mt-[20px]">
        <div>
          <div className="text-base font-semibold">Họ và Tên </div>
          <input type="text"  {...register("username", { required: true })} className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />
          {errors.username && <p className="text-[red]">Vui lòng nhập dữ liệu cho trường này !</p>}
        </div>
        <div className="my-[20px]">
          <div className="text-base font-semibold">Email </div>
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
          <div className="text-base font-semibold">Nhập Lại Mật Khẩu </div>
          <input type="password"  {...register("confirmpassword", { required: true })} className="w-full border h-9 mt-[5px]  decoration-inherit outline-none shadow-inner" />
          {errors.confirmpassword && <p className="text-[red]">Vui lòng nhập dữ liệu cho trường này !</p>}
        </div>
        <div>
          <button className="w-[80px] h-[40px] bg-[#ad8444] text-[white] font-semibold hover:bg-[#8f6849]">Gửi</button>
        </div>
      </form>
    </div>
  );
};
