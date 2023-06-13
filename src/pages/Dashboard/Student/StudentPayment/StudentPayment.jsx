import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
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
        <section className="px-[2.5%]">
            <div className="flex justify-center items-end w-full">
                <div className="lg:w-[576px] w-full p-10">
                    {
                        selectedClass && (
                            <Elements stripe={stripePromise}>
                                <CheckoutForm selectedClass={selectedClass} />
                            </Elements>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default StudentPayment;