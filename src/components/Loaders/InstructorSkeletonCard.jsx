import React from 'react';
import Skeleton from 'react-loading-skeleton';

const InstructorSkeletonCard = ({ cardCount }) => {
    const count = Array.from(Array(cardCount).keys())
    return (
        <>
            {
                count.map((x, index) => <div key={index} data-aos="fade-up">
                    <div><div className='h-80 bg-base-content'></div></div>
                    <div className='p-3'>
                        <div className='text-center mb-3'>
                            <div className='h-6 bg-base-content mx-auto mb-1'></div>
                            <div className='h-6 w-40 bg-base-content mx-auto mb-1'></div>
                            <div className='h-6 w-52 bg-base-content mx-auto mb-1'></div>
                        </div>
                        <div className='h-10 bg-base-content rounded-full mx-auto'></div>
                    </div>
                </div>)
            }
        </>
    );
};

export default InstructorSkeletonCard;