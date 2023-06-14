import React from 'react';
import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ heading, subheading }) => {
    return (
        <Fade>
            <div className='max-w-xl mx-auto text-center mb-5'>

                <h1 className='mb-2 text-3xl font-bold uppercase text-primary'>
                    --- {heading} ---
                </h1>
                <p className='opacity-50'>
                    {subheading}
                </p>
                <div className="divider max-w-xs mx-auto text-3xl text-primary">+</div>
            </div>
        </Fade>
    );
};

export default SectionTitle;