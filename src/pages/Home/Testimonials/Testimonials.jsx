import axios from 'axios';
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation, A11y } from "swiper";
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
    const [reviews, setReviews] = useState();
    useEffect(() => {
        axios.get('https://talk-trek-server.vercel.app/reviews')
            .then(data => {
                setReviews(data.data);
            });
    }, [])
    return (
        <section className='py-10'>
            <div className="container">
                <SectionTitle heading={"Testimonials"} subheading={'Hear how our language learning platform has transformed their language skills and opened doors to new opportunities. Join our community and be inspired by their success stories!'} />
                <div className='py-5'>
                    <Swiper
                        rewind={true}
                        navigation={true}
                        modules={[Navigation, A11y]}
                        className="mySwiper"
                    >
                        {
                            reviews?.map(review => <SwiperSlide key={review._id}>
                                <div className='flex flex-col items-center'>
                                    <img className='h-20 w-20 rounded-full object-cover mb-3' src={review.image} alt="" />
                                    <h3 className='text-3xl capitalize text-primary'>
                                        {review.name}
                                    </h3>

                                    <p className='py-3 text-center px-10'>
                                        {review.reviews}
                                    </p>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                </div>

                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;