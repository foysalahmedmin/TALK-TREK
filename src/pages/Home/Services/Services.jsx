import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaLanguage, FaDesktop, FaMedal, FaCommentDots } from "react-icons/fa";

const Services = () => {
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
                    <div className='bg-gradient-to-r from-lime-700 to-primary text-white py-10 px-5 flex justify-around items-center flex-wrap gap-5'>
                        <div className='w-80 md:flex gap-3' data-aos="fade-up" data-aos-duration="500">
                            <div>
                                <div className='rounded-full bg-lime-900 h-20 w-20 flex items-center justify-center'><FaLanguage className='text-5xl' /></div>
                            </div>
                            <div className='py-3'>
                                <h3 className='text-xl uppercase font-bold mb-3'>Learn The Most Popular Languages</h3>
                                <p>
                                    Language education necessary for communication in any country of the world is given at Talk Trek.
                                </p>
                            </div>
                        </div>
                        <div className='w-80 md:flex gap-3' data-aos="fade-up" data-aos-duration="1000">
                            <div>
                                <div className='rounded-full bg-lime-900 h-20 w-20 flex items-center justify-center'><FaDesktop className='text-5xl' /></div>
                            </div>
                            <div className='py-3'>
                                <h3 className='text-xl uppercase font-bold mb-3'>50+ Classes and Live Support</h3>
                                <p>
                                    Language education necessary for communication in any country of the world is given at Talk Trek.
                                </p>
                            </div>
                        </div>
                        <div className='w-80 md:flex gap-3' data-aos="fade-up" data-aos-duration="1500">
                            <div>
                                <div className='rounded-full bg-lime-900 h-20 w-20 flex items-center justify-center'><FaMedal className='text-5xl' /></div>
                            </div>
                            <div className='py-3'>
                                <h3 className='text-xl uppercase font-bold mb-3'>Better communication suggestions</h3>
                                <p>
                                    Certificates are given according to performance after completion of the course.
                                </p>
                            </div>
                        </div>
                        <div className='w-80 md:flex gap-3' data-aos="fade-up" data-aos-duration="2000">
                            <div>
                                <div className='rounded-full bg-lime-900 h-20 w-20 flex items-center justify-center'><FaCommentDots className='text-5xl' /></div>
                            </div>
                            <div className='py-3'>
                                <h3 className='text-xl uppercase font-bold mb-3'>Learn The Most Popular Languages</h3>
                                <p>
                                    Good is taught in the language by good mentors. And language related live classes are taken.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;