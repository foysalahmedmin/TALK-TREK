import { useSwiper } from 'swiper/react';
import { FiArrowLeft } from "react-icons/fi";
const SwiperButtons = () => {
    const swiper = useSwiper()
    return (
        <div className='swiper-nav-btns'>
            {/* <button onClick={() => swiper.slidePrev()}>Prev</button> */}
            <button onClick={() => swiper.slideNext()}><FiArrowLeft className='text-5xl text-base-content' /></button>
        </div>
    );
};

export default SwiperButtons;