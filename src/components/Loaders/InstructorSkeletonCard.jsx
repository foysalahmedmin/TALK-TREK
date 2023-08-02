import React from 'react';
import Skeleton from 'react-loading-skeleton';

const InstructorSkeletonCard = ({ cardCount }) => {
    const count = Array.from(Array(cardCount).keys())
    return (
        <>
            {
                count.map((x, index) => <div key={index}>
                    <div><Skeleton height={320} /></div>
                    <div className='p-3'>
                        <div className='text-center'>
                            <Skeleton height={25}/>
                            <Skeleton width={150} />
                            <Skeleton width={200} />
                        </div>
                        <div className='flex'>
                            <div className='flex-1 rounded-full overflow-hidden'><Skeleton height={40} /></div>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
};

export default InstructorSkeletonCard;