import React from 'react';
import { Link } from 'react-router-dom';

const InstructorClassesTR = ({ classItem, showFeedback }) => {
    const { _id, className, classImage, classCategory, price, bookedSeats, seats, status, instructorName, instructorEmail, feedback } = classItem;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={classImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{className}</div>
                        <div className="text-sm opacity-50">{classCategory}</div>
                        <div className="text-sm opacity-50 ">
                            <p>Seats: {seats} </p>
                            <p>Price: {price} </p>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{instructorName}</div>
                <p>{instructorEmail}</p>
            </td>
            <th>
                <button className="font-bold">{bookedSeats}</button>
            </th>
            <th className='text-center'>
                {status}
            </th>
            <th >
                <div className="text-center h-full flex justify-center items-center flex-wrap gap-1">
                    <Link to={`/dashboard/instructorClassUpdate/${_id}`}><button className="primary-btn-sm">Update</button></Link>
                    {
                        status === 'denied' && (<button onClick={() => showFeedback({feedback, className, _id})}  className="secondary-btn-sm">Admin Feedback</button>)
                    }
                </div>
            </th>
        </tr>
    );
};

export default InstructorClassesTR;