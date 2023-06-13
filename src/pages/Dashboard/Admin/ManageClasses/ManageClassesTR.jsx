import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import TrSkeleton from '../../../../components/Loaders/TrSkeleton';

const ManageClassesTR = ({ classItem, feedbackHandler, refetch }) => {
    const [axiosSecure] = useAxiosSecure()
    const { _id, className, classImage, classCategory, price, instructorName, instructorEmail, status } = classItem;
    const statusHandler = (updateStatus) => {
        if (updateStatus) {
            axiosSecure.put(`/admin/updateStatus/${_id}`, { status: updateStatus, instructorEmail })
                .then(result => {
                    console.log(result.data)
                    refetch()
                    if (result.data.modifiedCount > 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `The class ${updateStatus} successfully.`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }
    return (
        <>
            <TrSkeleton trCount={3} />
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
                            <div className="text-sm opacity-50">Price: {price}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="font-bold">{instructorName}</div>
                    <p>{instructorEmail}</p>
                </td>
                <th>
                    <button className="font-bold">${status}</button>
                </th>
                <th >
                    <div className="text-center h-full flex justify-center items-center flex-wrap gap-1">
                        <button onClick={() => statusHandler('approved')} disabled={!status == 'approved'} className="secondary-btn-sm">Approved</button>
                        <button onClick={() => statusHandler('denied')} disabled={status == 'approved'} className="secondary-btn-sm">Denied</button>
                    </div>
                </th>
                <th className='text-center'>
                    <button onClick={() => feedbackHandler({ _id, className, instructorName, instructorEmail })} className='btn btn-outline'>Feedback</button>
                </th>
            </tr>
        </>
    )
};

export default ManageClassesTR;