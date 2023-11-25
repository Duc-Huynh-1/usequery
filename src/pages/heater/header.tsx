

export const Header = () => {
    return (
        <div>
            <div className="w-[100%]">
                {/* Phần 1 */}
                <div className="flex bg-[#2e2f31] h-[50px] px-[80px] py-[10px]">
                    {/* Vị trí */}
                    <div className="flex text-[white] cursor-pointer " title="fpt polytechnich">
                        <i className="fa-solid fa-location-dot text-xl"></i>
                        <p className="text-[18px] font-normal ml-[8px]">Location</p>
                    </div>

                    {/* Email */}
                    <div className="flex text-[white] text-xl mx-[30px] cursor-pointer" title="huynhldph29106@fpt.edu.vn">
                        <i className="fa-solid fa-envelope"></i>
                        <p className="text-[18px] font-normal ml-[8px]" >Email</p>
                    </div>

                    {/* Điện thoại */}
                    <div className="flex text-[white] text-xl cursor-pointer" title="012345678">
                        <i className="fa-solid fa-phone"></i>
                        <p className="text-[18px] font-normal ml-[8px]">012345678</p>
                    </div>

                    {/* Giới thiệu */}
                    <div className="ml-[50px] mt-[2px]">
                        <marquee direction="left" className="w-[800px] text-[white]">
                            Quán Cà Phê, Trà Sữa Bee - thỏa mãn vị giác, tạo không gian ấm áp, mang lại trải nghiệm thư giãn và độc đáo. Bee là điểm đến lý tưởng cho mọi người.
                        </marquee>
                    </div>
                    {/* search */}
                    <div className="ml-[40px]">
                        <a href="">
                            <button className="flex text-[white] text-xl bg-[#FED100] w-[38px] h-[35px] rounded-[5px] px-[8px] py-[8px]">
                                <i className="fa-solid fa-magnifying-glass text-[#000]"></i>
                            </button>
                        </a>
                    </div>
                    {/* cart */}
                    <div className="ml-[30px]">
                        <a href="">
                            <button className="flex text-[white] text-xl bg-[#FED100] w-[38px] h-[35px] rounded-[5px] px-[8px] py-[8px]">
                                <i className="fa-solid fa-cart-shopping text-[#000]"></i>
                            </button>
                        </a>
                    </div>
                </div>
                {/* end 1 */}
            </div>

            {/* Phần 2 */}
            <div className="ml-[] h-[80px]  py-[20px] flex">
                <div>
                    <h1 className="text-[#FED100] font-semibold text-2xl ">THE COFFEE HOUSE</h1>
                </div>
                {/* logo */}
                <nav>
                    <ul className="flex  ml-[200px]">
                        <li className=""><a href="" className="text-[18px] font-medium text-[#373b3b] hover:text-[#FED100]">TRANG CHỦ </a></li>
                        <li><a href="" className="text-[18px] font-medium text-[#373b3b] mx-[20px] hover:text-[#FED100]">SẢN PHẨM  </a></li>
                        <li><a href="" className="text-[18px] font-medium text-[#373b3b] hover:text-[#FED100]">GIỚI THIỆU </a></li>
                        <li><a href="" className="text-[18px] font-medium text-[#373b3b] mx-[20px] hover:text-[#FED100]">MENU</a></li>
                        <li><a href="" className="text-[18px] font-medium text-[#373b3b] hover:text-[#FED100]">TIN TÚC </a></li>
                        <li><a href="" className="text-[18px] font-medium text-[#373b3b] ml-[20px] hover:text-[#FED100]">LIÊN HỆ </a></li>
                    </ul>
                </nav>
                <div className="flex  w-[200px]  h-[50px] ml-[100px] mt-[-10px] ">
                    <a href="/signin">
                        <button className="w-[90px] h-[50px] border hover:bg-[#FED100] text-[18px] rounded-[5px] shadow-lg">Signin</button>
                    </a>
                    <a href="/signup">
                        <button className="w-[90px] h-[50px] border ml-[10px] hover:bg-[#FED100] text-[18px] rounded-[5px] shadow-lg">Signup</button>
                    </a>
                </div>
                {/* signin signup */}
            </div>
            {/* nav */}


            {/* Nội dung phần 2 */}
        </div>
    );
};
