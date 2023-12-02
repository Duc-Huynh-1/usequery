import { useState } from "react";

export const Navhome = () => {
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };
    return (
        <div className=" h-[80px] flex  mt-[-2px] ">
            <a href="" className="" title="Đóm mộc gia" >
                <img src="/public/img/LOGO.png" alt="" className="w-[86px] h-auto ml-[5px] cursor-pointer " />
            </a>
            <nav className="ml-[150px] ">
                <ul className="flex my-[28px]">
                    <li className=""><a href="/" className="leading-5 font-bold text-base text-[#ad8444] hover:underline hover:underline-offset-8">TRANG CHỦ</a></li>
                    <li><a href="" className="leading-5 font-bold text-base text-[#ad8444] mx-[32px]  hover:underline hover:underline-offset-8">GIỚI THIỆU</a></li>
                    <li><a href="/products" className="leading-5 font-bold text-base text-[#ad8444]  hover:underline hover:underline-offset-8">SẢN PHẨM  </a></li>
                    <li><a href="" className="leading-5 font-bold text-base text-[#ad8444] mx-[32px]  hover:underline hover:underline-offset-8">MENU</a></li>
                    <li><a href="" className="leading-5 font-bold text-base text-[#ad8444]  hover:underline hover:underline-offset-8">TIN TỨC</a></li>
                    <li><a href="" className="leading-5 font-bold text-base text-[#ad8444] mx-[32px]  hover:underline hover:underline-offset-8 ">LIÊN HỆ  </a></li>
                </ul>
            </nav>
            <div className="flex pl-[2px] py-5">
                <div
                    className=" flex flex-row-reverse gap-2 justify-center items-center "
                    style={{ transition: 'all 0.3s', animation: 'fadeIn 0.5s' }}
                >
                    <div className="flex ">
                  
                    {showSearch && (
                        <div
                            className="right-0 bg-white rounded-md shadow-md"
                            style={{ transition: 'all 0.8s', animation: 'fadeIn 0.5s' }}
                        >
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border border-gray-300 p-1 rounded-md bg-[#ffffffa1]"
                            />
                        </div>
                    )}
                      <a className="bg-[#f2b10b] p-1 px-2 rounded-md mr-2 " onClick={toggleSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </a>
                    </div>
                </div>

                <span className="box-border h-8 border mx-[20px]"></span>
                <a href="/cart">
                    <div className="">
                        <i className="fa-solid fa-cart-shopping text-[white] bg-[#ad8444] w-[35px] h-[35px] rounded-[50%] pt-[10px] pl-[7px]"></i>
                    </div>
                </a>
            </div>

        </div>
    )
}