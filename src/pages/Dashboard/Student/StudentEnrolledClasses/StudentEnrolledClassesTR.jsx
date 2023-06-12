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
                        <div className="text-sm opacity-50">{price}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{instructorName}</div>
                <p>{instructorEmail}</p>
            </td>
            <th>
                <button title={paymentId} className="font-bold">${paymentId.slice(0,5)}...</button>
            </th>
            <th >
                <div className="text-center h-full flex justify-center items-center flex-wrap gap-1">
                    
                </div>
            </th>
        </tr>
    );
};

export default StudentEnrolledClassesTR;