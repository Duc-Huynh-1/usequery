
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Slide = ()=> {
    return (
        <>
            <div className='pt-[160px]'>
            <Swiper 
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img src="../../public/img/Banner-flash-sale.png" alt="" className='w-full h-auto object-cover' /></SwiperSlide>
                <SwiperSlide><img src="../../public/img/banner-black-friday.png" alt="" className='w-full' /></SwiperSlide>
                <SwiperSlide><img src="../../public/img/banner-trang-chu-dom-moc-gia.png" alt="" className='w-full'/></SwiperSlide>
            </Swiper>
            </div>
        </>
    );
}
export default Slide