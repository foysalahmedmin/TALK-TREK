import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ClassCard from '../../pages/Home/popularClasses/ClassCard';

const ClassSkeletonCard = ({cardCount}) => {
    const count = Array.from(Array(cardCount).keys())
    console.log(count)
    return (
        <>
            {
                count.map((x, index) => <div key={index}>
                    <div><Skeleton height={240} /></div>
                    <div className='text-right relative mr-5 -mt-10'><Skeleton circle height={80} width={80} /></div>
                    <div className='p-3'>
                        <div className=''>
                            <Skeleton count={3} width={250} />
                        </div>
                        <div className='flex gap-3'>
                            <div className='flex-1 rounded-full overflow-hidden'><Skeleton height={40} /></div>
                            <div className='w-10 h-10'><Skeleton circle width={40} height={40} /></div>
                        </div>
                    </div>
                </div>)
            }

        </>
    );
};

export default ClassSkeletonCard;