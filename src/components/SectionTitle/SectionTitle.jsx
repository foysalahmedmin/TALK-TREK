import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='max-w-xl mx-auto text-center mb-5' data-aos="fade-down">

            <div className='mb-2 text-3xl font-bold uppercase text-primary flex items-center justify-center gap-1'>
                <span className='flex-shrink-0'>--</span> <h1>{heading}</h1> <span className='flex-shrink-0'>--</span>
            </div>
            <p className='opacity-50'>
                {subheading}
            </p>
            <div className="divider max-w-xs mx-auto text-3xl text-primary">+</div>
        </div>
    );
};

export default SectionTitle;