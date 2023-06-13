import usePaymentHistory from "../../../../hooks/usePaymentHistory";
import StudentPaymentHistoryTR from "./StudentPaymentHistoryTR";

const StudentPaymentHistory = () => {
    const [paymentHistory] = usePaymentHistory()
    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((paymentItem, i) => <StudentPaymentHistoryTR key={paymentItem._id} paymentItem={paymentItem} i={i} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default StudentPaymentHistory;