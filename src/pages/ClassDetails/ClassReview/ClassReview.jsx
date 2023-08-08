import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const ClassReview = ({ id }) => {
    const [reviews, setReviews] = useState([])
    const [updated, setUpdated] = useState(false)
    useEffect(() => {
        axios.get(`https://talk-trek-server.vercel.app/reviews/${id}`)
            .then(result => setReviews(result.data))
    }, [id, updated])
    return (
        <>
            {
                reviews.length && <section className="py-10">
                    <div className="container">
                    <div data-aos="fade-up">
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Reviews <span className="text-xl text-primary font-semibold">({reviews.length})</span>
                            </div>
                            <div className="collapse-content">
                                <div className="mb-5">
                                    {
                                        reviews?.map(review => <div className="mb-3" key={review._id}>
                                            <div className="flex gap-3">
                                                {review.image ? <img className="w-10 h-10 rounded-full" src={review.image} alt="" /> : <FaUserCircle className="w-10 h-10" />}
                                                <div>
                                                    <h3 className="font-semibold mb-1">{review.name}</h3>
                                                    <div className="mb-1">
                                                        <Rating
                                                            style={{ maxWidth: 100 }}
                                                            value={review.rating}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <p>
                                                        {review.review}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            }
        </>
    );
};

export default ClassReview;