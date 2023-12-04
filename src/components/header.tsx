
import { Navhome } from "./navhome";

export const Header = () => {
    const usernameLocal = localStorage.getItem('username')
    const logOut = () => {
        localStorage.clear()
        window.location.reload()
    }
    const userRole: any = localStorage.getItem('role');
    console.log(userRole);

    return (
        <div className="w-[100%] px-[80px] fixed z-10  bg-[white]">
            <div >
                {/* Phần 1 */}
                <div className="flex   h-[45px]  ">
                    <div className="my-[15px]">
                        <h3 className="loading-5 uppercase font-bold box-border text-xs list-none">Đóm mộc gia - thắp sáng căn nhà của bạn</h3>
                    </div>
                    {
                        usernameLocal ? (<div className="flex  ml-[700px] py-4 cursor-pointer">
                            Xin chào :
                            <div className="group  transition ml-[5px]">
                                <span className="font-bold text-[#ad8444]">{usernameLocal}</span>
                                {/* Mega Menu */}
                                <ul className={`absolute ${userRole == 1 ? 'hidden group-hover:block' : 'hidden group-hover:block'} mt-[-1.5px] bg-[#ffffffa1] text-black border-[2px] rounded-2xl transition-all duration-500`}>
                                    {userRole == 1 ? (
                                        <>
                                            <li>
                                                <a href="/admin" className="block pt-1 hover:text-[#ad8444] transition-all duration-150">
                                                    <i className="fa-solid fa-caret-right m-2"></i>
                                                    Admin
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className="block pt-1 hover:text-[#ad8444] transition-all duration-150">
                                                    <i className="fa-solid fa-caret-right m-2"></i>
                                                    Đổi mật khẩu
                                                </a>
                                            </li>
                                            <li>
                                                <a onClick={logOut} href="" className="block pt-1 hover:text-[#ad8444] transition-all duration-150">
                                                    <i className="fa-solid fa-caret-right m-2"></i>
                                                    Đăng xuất
                                                </a>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <a href="" className="block pt-1 hover:text-[#ad8444] transition-all duration-150">
                                                    <i className="fa-solid fa-caret-right m-2"></i>
                                                    Đổi mật khẩu
                                                </a>
                                            </li>
                                            <li>
                                                <a onClick={logOut} href="" className="block pt-1 hover:text-[#ad8444] transition-all duration-150">
                                                    <i className="fa-solid fa-caret-right m-2"></i>
                                                    Đăng xuất
                                                </a>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>

                        </div>
                        ) : (
                            <div className="flex my-[8px] ml-[680px]">

                                <a href="/signin" className="relative">
                                    <button className="text-sm font-semibold group ">
                                        Đăng Nhập
                                        <span className="absolute inset-x-0 bottom-0 border border-[#000000] ml-[15px] w-[40px] transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></span>
                                    </button>
                                </a>
                                <a href="/signup" className="relative">
                                    <button className="text-sm font-semibold group ml-[32px]">
                                        Đăng Ký
                                        <span className="absolute ml-[37px] inset-x-0 bottom-0 border border-[#000000]  w-[40px] transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></span>
                                    </button>
                                </a>
                            </div>
                        )
                    }
                </div>
                {/* end 1 */}
            </div>

            {/* Phần 2 */}
            <Navhome />
            {/* nav */}

            <div className="mt-[10px] mx-[-80px] box-border ">
                <hr className="w-full" />
            </div>
            {/* Nội dung phần 2 */}
        </div>
    );
};
