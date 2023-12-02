

const Navadmin = () => {
  return (
    <div className="shadow-xl w-[220px] h-full fixed px-[30px]">
      <a href="/"> <div className="flex mt-[10px] mx-[-10px]">
        <img src="/public/img/LOGO.png" alt="" className="w-[80px] h-[70px]" />
        <h2 className="my-[20px] text-base font-semibold">Đóm mộc gia</h2>
      </div></a>
      <div className=" mt-[30px] mb-4 ">
        <ul>
          <a href="/admin" className="text-base font-semibold "><li className="h-[30px]  hover:scale-110 my-[10px] hover:bg-[#ad8444]  hover:text-[white] cursor-pointer">Dashboard</li></a>
          <a href="/admin/Managas" className="text-base font-semibold "><li className="h-[30px]  hover:scale-105 hover:bg-[#ad8444]  hover:text-[white]  cursor-pointer">Products</li></a>
          <a href="" className="text-base font-semibold "><li className="h-[30px]  hover:scale-105 my-[10px] hover:bg-[#ad8444]  hover:text-[white]  cursor-pointer">Users</li></a>
          <a href="" className="text-base font-semibold "><li className="h-[30px]  hover:scale-105 hover:bg-[#ad8444]  hover:text-[white]  cursor-pointer">Cart</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Navadmin