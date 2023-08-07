import React from 'react';
import Skeleton from 'react-loading-skeleton';

const TrSkeleton = ({trCount}) => {
    const count = Array.from(Array(trCount).keys())
    return (
        <>
            {
                count.map((x, index) => <tr key={index}><Skeleton height={50} /></tr>)
            }
        </>
    );
};

export default TrSkeleton;