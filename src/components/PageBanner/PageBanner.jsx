import React from 'react';

const PageBanner = ({ title, summary }) => {
    return (
        <section className={`bg-[url('/bg.png')] bg-top bg-no-repeat`}>
            <div className='bg-base-100 bg-opacity-80 min-h-[30rem] flex w-full justify-center items-center pt-20'>
                <div className="container">
                    <div className="text-center px-5 py-10 bg-base-100 bg-opacity-50 shadow-xl" data-aos="zoom-out">
                        <div className='text center'>
                            <h1 className="text-5xl text-primary font-black uppercase mb-5">{title}</h1>
                            <p className="mb-3">{summary}</p>
                            <p className="uppercase font-semibold opacity-50 tracking-[5px] mb-5">
                                Tet`s start your journey with us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageBanner;