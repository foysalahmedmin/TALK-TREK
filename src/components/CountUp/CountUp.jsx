import { useEffect, useState } from "react";

const CountUp = ({ start, end }) => {
    const [num, setNum] = useState(start || 0)

    useEffect(() => {
        const interval = setInterval(() => {
            setNum((prevNum) => {
                const nextNum = prevNum + Math.round((end / 10))
                if (nextNum >= end){
                    clearInterval(interval);
                    return end ;
                }
                return nextNum ;
            })
        }, 100)

        return () => clearInterval(interval)
    }, [end])

    return (
        <span>
            {num}
        </span>
    );
};

export default CountUp;