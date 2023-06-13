import React from 'react';
import Skeleton from 'react-loading-skeleton';

const TrSkeleton = ({trCount}) => {
    const count = Array.from(Array(trCount).keys())
    return (
        <>
            {
                count.map((x, index) => <Skeleton key={index} height={50} />)
            }
        </>
    );
};

export default TrSkeleton;