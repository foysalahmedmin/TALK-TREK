import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import slied1 from "../../../assets/slied1.png"
import slied2 from "../../../assets/slied2.png"
import slied3 from "../../../assets/slied3.png"
import slied4 from "../../../assets/slied4.png"

const HomeSlider = () => {
    return (
        <section className={`bg-[url('/bg.png')] bg-top bg-no-repeat`}>
            <div className="bg-opacity-5" data-aos="zoom-out">
                <Swiper
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    loop
                    modules={[Autoplay, Pagination]}
                    className="home_slider"
                >

                    <SwiperSlide>
                        <div className='bg-base-100 bg-opacity-80 min-h-screen flex justify-center items-center pt-20'>
                            <div className="container overflow-hidden items-center justify-center">
                                <div className="hero">
                                    <div className="hero-content flex-col lg:flex-row-reverse">
                                        <img src={slied4} className="md:max-w-xl w-full" />
                                        <div>
                                            <h1 className="text-3xl md:text-5xl uppercase text-primary font-black mb-5">Connect with the World Through Language!</h1>
                                            <p className="mb-3">
                                                Join TalkTrek, the dynamic language-learning platform that bridges cultures and connects you with the world through language. Our innovative curriculum, interactive lessons, and supportive community empower you to communicate confidently in multiple languages. Experience the transformative power of language with LinguaLink and embark on a global linguistic journey like never before!
                                            </p>
                                            <p className="uppercase font-semibold opacity-50 tracking-[5px] mb-5">
                                                Tet`s start your journey with
                                            </p>
                                            <button className="primary-btn">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 bg-opacity-80 min-h-screen flex justify-center items-center pt-20'>
                            <div className="container overflow-hidden items-center justify-center">
                                <div className="hero">
                                    <div className="hero-content flex-col lg:flex-row-reverse">
                                        <img src={slied1} className="md:max-w-xl w-full" />
                                        <div>
                                            <h1 className="text-3xl md:text-5xl uppercase text-primary font-black mb-5">Explore the World Through Language!</h1>
                                            <p className="mb-3">
                                                Embark on an exciting language-learning adventure with TongueTrek, your passport to exploring the world through language. Our immersive courses and interactive lessons take you on a journey to fluency, connecting you with diverse cultures and opening doors to new opportunities. Discover the joy of language acquisition with TongueTrek and let your linguistic exploration begin!
                                            </p>
                                            <p className="uppercase font-semibold opacity-50 tracking-[5px] mb-5">
                                                Tet`s start your journey with
                                            </p>
                                            <button className="primary-btn">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 bg-opacity-80 min-h-screen flex justify-center items-center pt-20'>
                            <div className="container overflow-hidden items-center justify-center">
                                <div className="hero">
                                    <div className="hero-content flex-col lg:flex-row-reverse">
                                        <img src={slied2} className="md:max-w-xl w-full" />
                                        <div>
                                            <h1 className="text-3xl md:text-5xl uppercase text-primary font-black mb-5"> Your Path to Language Mastery!</h1>
                                            <p className="mb-3">
                                                Start your language-learning journey with LingoLeap, the ultimate platform for achieving language mastery. Our interactive courses, personalized approach, and engaging content make learning a new language a breeze. Whether yoUre a beginner or advanced learner, LingoLeap guides you every step of the way. Join us now and unlock your linguistic potential!
                                            </p>
                                            <p className="uppercase font-semibold opacity-50 tracking-[5px] mb-5">
                                                Tet`s start your journey with
                                            </p>
                                            <button className="primary-btn">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-base-100 bg-opacity-80 min-h-screen flex justify-center items-center pt-20'>
                            <div className="container overflow-hidden items-center justify-center">
                                <div className="hero">
                                    <div className="hero-content flex-col lg:flex-row-reverse">
                                        <img src={slied3} className="md:max-w-xl w-full" />
                                        <div>
                                            <h1 className="text-3xl md:text-5xl uppercase text-primary font-black mb-5">Unleash Your Voice in Every Language!</h1>
                                            <p className="mb-3">
                                                Discover your voice in every language with VoxVerse, the empowering language-learning platform designed to unleash your multilingual potential. From beginner to advanced, our comprehensive courses and engaging exercises foster fluency and build confidence. Join VoxVerse today and embark on a transformative journey of self-expression and linguistic mastery!
                                            </p>
                                            <p className="uppercase font-semibold opacity-50 tracking-[5px] mb-5">
                                                Tet`s start your journey with
                                            </p>
                                            <button className="primary-btn">Get Started</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default HomeSlider;