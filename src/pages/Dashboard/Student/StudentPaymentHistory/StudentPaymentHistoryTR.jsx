import React from 'react';

const StudentPaymentHistoryTR = ({ paymentItem, i }) => {
    const { date, classId, studentEmail, id, amount, status } = paymentItem;
    return (
        <tr>
            <th>{i}</th>
            <td>{id}</td>
            <td>
                <p>ClassID: {classId}</p>
                <p>Amount: {amount/100}</p>
            </td>
            <td>{studentEmail}</td>
            <td>{date}</td>
            <td>{status}</td>
        </tr>
    );
};

export default StudentPaymentHistoryTR;