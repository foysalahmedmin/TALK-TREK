import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, A11y } from "swiper";
import img1 from '../../../assets/featur1.jpg'
import img2 from '../../../assets/featur2.jpg'
import img3 from '../../../assets/featur3.jpg'
import img4 from '../../../assets/featur4.jpg'
import img5 from '../../../assets/featur5.jpg'
import img6 from '../../../assets/featur6.jpg'
import SwiperButtons from "../../../components/SwiperButtons/SwiperButtons";

const Feature = () => {
    return (
        <section className='py-10 bg-base-300'>
            <div className="container">
                <div className='lg:grid lg:grid-cols-2 gap-5'>
                    <div className="w-full mb-5">
                        <h1 className='text-3xl md:text-5xl font-bold mb-5 text-primary'>Why Talk-Trek is more interactive language learning platform!</h1>
                        <p>
                            Talk-Trek is a highly interactive language learning platform that offers authentic conversations, virtual immersion, personalized learning, gamification, and a supportive community, making it an exceptional choice for interactive language learning.
                        </p><br />
                        <p>
                            It provides learners with practical language skills, cultural insights, and engaging activities to enhance their language proficiency.
                        </p>
                    </div>
                    <div className="relative">
                        <Swiper
                            grabCursor={true}
                            effect={"creative"}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ["100%", 0, 0],
                                },
                            }}
                            modules={[EffectCreative, A11y]}
                            className="mySwiper"
                        >

                            <SwiperSlide><img className="h-[500px] w-full object-cover" src={img1} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="h-[500px] w-full object-cover" src={img2} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="h-[500px] w-full object-cover" src={img3} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="h-[500px] w-full object-cover" src={img4} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="h-[500px] w-full object-cover" src={img5} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="h-[500px] w-full object-cover" src={img6} alt="" /></SwiperSlide>
                            <div className="absolute bottom-0 z-10">
                                <SwiperButtons />
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;