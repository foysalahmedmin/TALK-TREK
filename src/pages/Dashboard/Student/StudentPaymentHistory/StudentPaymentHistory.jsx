import usePaymentHistory from "../../../../hooks/usePaymentHistory";
import StudentPaymentHistoryTR from "./StudentPaymentHistoryTR";

const StudentPaymentHistory = () => {
    const [paymentHistory, paymentHistoryLoading] = usePaymentHistory()
    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Class</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((paymentItem, i) => <StudentPaymentHistoryTR key={paymentItem._id} paymentItem={paymentItem} i={i + 1} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default StudentPaymentHistory;