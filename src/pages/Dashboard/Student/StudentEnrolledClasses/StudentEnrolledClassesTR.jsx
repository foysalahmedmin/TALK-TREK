import React from 'react';

const StudentEnrolledClassesTR = ({classItem}) => {
    const { paymentId,  className, classImage, classCategory, price, startingDate, instructorName, instructorEmail } = classItem;
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
                        <div className="text-sm opacity-50">{startingDate}</div>
                        <div className="text-sm opacity-50">Price: {price}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{instructorName}</div>
                <p>{instructorEmail}</p>
            </td>
            <td>
                <button title={paymentId} className="font-bold">${paymentId}...</button>
            </td>
            <th >
                <button className='primary-btn-sm'>Details</button>
            </th>
        </tr>
    );
};

export default StudentEnrolledClassesTR;