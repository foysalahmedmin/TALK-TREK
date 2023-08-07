import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CountUp from '../../../components/CountUp/CountUp';
import { FaUsers, FaLaptopHouse, FaUserTie, FaShapes } from "react-icons/fa";

const Count = () => {
    const [countStart, setCountStart] = useState(true)
    return (
        <section className='py-10'>
            <div className="container">
                <div data-aos="fade-up">
                    <div>
                        <SectionTitle
                            heading={"Our Services"}
                            subheading={"Learn from the best! Our popular instructors are highly experienced and passionate about teaching languages. Join us and be inspired by our exceptional team of instructors!"}
                        />
                    </div>
                    <ScrollTrigger onEnter={() => setCountStart(true)} onExit={() => setCountStart(false)}>
                        <div className='flex flex-wrap gap-5 justify-around items-center py-5'>
                            <div className='w-40 h-40 p-3 rounded-full border border-primary flex flex-col justify-center items-center' data-aos="fade-up" data-aos-duration="500">
                                <FaUsers className='text-5xl mx-auto mb-1' />
                                <p className='font-bold text-3xl text-primary'>{countStart ? <CountUp start={0} end={3500} /> : 0}</p> <p className='font-semibold'>Students</p>
                            </div>
                            <div className='w-40 h-40 p-3 rounded-full border border-primary flex flex-col justify-center items-center' data-aos="fade-up" data-aos-duration="1000">
                                <FaLaptopHouse className='text-5xl mx-auto mb-1' />
                                <p className='font-bold text-3xl text-primary'>{countStart ? <CountUp start={0} end={20} /> : 0}</p> <p className='font-semibold'>Classes</p>
                            </div>
                            <div className='w-40 h-40 p-3 rounded-full border border-primary flex flex-col justify-center items-center' data-aos="fade-up" data-aos-duration="1500">
                                <FaUserTie className='text-5xl mx-auto mb-1' />
                                <p className='font-bold text-3xl text-primary'>{countStart ? <CountUp start={0} end={10} /> : 0}</p> <p className='font-semibold'>Instructors</p>
                            </div>
                            <div className='w-40 h-40 p-3 rounded-full border border-primary flex flex-col justify-center items-center' data-aos="fade-up" data-aos-duration="2000">
                                <FaShapes className='text-5xl mx-auto mb-1' />
                                <p className='font-bold text-3xl text-primary'>{countStart ? <CountUp start={0} end={15} /> : 0}</p> <p className='font-semibold'>Branches</p>
                            </div>
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </section>
    );
};

export default Count;