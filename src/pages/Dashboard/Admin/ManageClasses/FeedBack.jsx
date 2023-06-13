import React, { useEffect } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const FeedBack = ({ feedbackClass }) => {
    const [axiosSecure] = useAxiosSecure()
    const { _id, className, instructorName, instructorEmail } = feedbackClass;
    const feedbackHandler = (e) => {
        e.preventDefault()
        const message = e.target.feedback.value;
        if(message){
            axiosSecure.put(`/admin/feedback`, {feedback: message})
            .then(result => {
                console.log(result.data)
            })
        }
    }
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box text-center">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <form onSubmit={feedbackHandler}>
                        <h3 className="font-bold text-center uppercase text-xl">{className}</h3>
                        <p className="text-center uppercase font-light tracking-[3px]">Instructor: {instructorName}</p>
                        <p className='text-center'>{instructorEmail}</p>
                        <label htmlFor="feedback"></label>
                        <textarea placeholder="Feedback" name='feedback' id='feedback' className="textarea textarea-bordered textarea-md w-full" ></textarea>
                        <input className='primary-btn w-full' type="submit" value="FEEDBACK" />
                    </form>
                </form>
            </dialog>
        </>
    );
};

export default FeedBack;