import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageUsersTR = ({user, refetch}) => {
    const [axiosSecure] = useAxiosSecure()
    const {_id, Name, Image, Email, Role} = user ;
    const userRoleHandler = (role) =>{
        if (role) {
            axiosSecure.put(`/admin/updateUserRole/${_id}`, { role: role })
                .then(result => {
                    refetch()
                    console.log(result.data)
                    if(result.data.modifiedCount){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: `${Name} is ${role} now.`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
    }
    return (
        <tr data-aos="zoom-in">
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={Image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{Name}</div>
                        <div className="text-sm opacity-50">{Email}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{_id}</div>
                <p>{}</p>
            </td>
            <th>
                <button className="font-bold uppercase">{Role}</button>
            </th>
            <th >
                <div className="text-center h-full flex justify-center items-center flex-wrap gap-1">
                    <button onClick={()=> userRoleHandler('admin')} disabled={Role === 'admin'}  className="primary-btn-sm">Admin</button>
                    <button onClick={()=> userRoleHandler('instructor')} disabled={Role === 'instructor'}  className="secondary-btn-sm">Instructor</button>
                </div>
            </th>
        </tr>
    );
};

export default ManageUsersTR;