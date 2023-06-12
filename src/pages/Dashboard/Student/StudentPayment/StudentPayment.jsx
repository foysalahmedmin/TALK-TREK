import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useSingleMySelectedClasses from "../../../../hooks/useSingleMySelectedClasses";
import useAuth from "../../../../hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_PK);
const StudentPayment = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useAuth()
    const [selectedClass, setSelectedClass] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axiosSecure.get(`/student/selectedSingleClasses/${id}`)
            .then(result => {
                setSelectedClass(result.data);
            })
    }, [id])

    return (
        <div>
            {
                selectedClass && (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm selectedClass={selectedClass} />
                    </Elements>
                )
            }
        </div>
    );
};

export default StudentPayment;