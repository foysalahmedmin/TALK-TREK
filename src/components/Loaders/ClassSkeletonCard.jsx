import 'react-loading-skeleton/dist/skeleton.css'

const ClassSkeletonCard = ({ cardCount }) => {
    const count = Array.from(Array(cardCount).keys())
    return (
        <>
            {
                count.map((x, index) => <div key={index} data-aos="fade-up">
                    <div><div className='h-60 bg-base-content'></div></div>
                    <div className='text-right relative mr-5 -mt-10'>
                        <div className='h-20 w-20 ml-auto bg-base-content rounded-full'></div>
                    </div>
                    <div className='p-3'>
                        <div className='mb-3'>
                            <div className='h-6 w-60 bg-base-content mb-1'></div>
                            <div className='h-6 w-60 bg-base-content mb-1'></div>
                            <div className='h-6 w-60 bg-base-content'></div>
                        </div>
                        <div className='h-10 bg-base-content rounded-full'></div>
                    </div>
                </div>)
            }

        </>
    );
};

export default ClassSkeletonCard;