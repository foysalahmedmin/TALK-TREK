import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const FeedBack = ({ feedbackClass }) => {
    const [axiosSecure] = useAxiosSecure()
    const { _id, className, instructorName, instructorEmail } = feedbackClass;
    const [message, setMessage] = useState('')
    const messageHandler = (e) => setMessage(e.target.value)
    const feedbackHandler = () => {
        if (message) {
            axiosSecure.put(`/admin/feedback/${_id}`, { feedback: message })
                .then(result => {
                    console.log(result.data)
                    if(result.data.modifiedCount > 0){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `Sended successfully.`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box text-center">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div>
                        <h3 className="font-bold text-center uppercase text-xl">{className}</h3>
                        <p className="text-center uppercase font-light tracking-[3px]">Instructor: {instructorName}</p>
                        <p className='text-center mb-5'>{instructorEmail}</p>
                        <div>
                            <label htmlFor="feedback"></label>
                            <textarea onChange={messageHandler} placeholder="Feedback" name='feedback' id='feedback' className="textarea textarea-bordered textarea-md w-full mb-3" ></textarea>
                            <button onClick={feedbackHandler} className='primary-btn w-full' >FEEDBACK</button>
                        </div>
                    </div>
                </form>
            </dialog>
        </>
    );
};

export default FeedBack;