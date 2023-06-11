import { HiDocumentText } from "react-icons/hi";

const InstructorCard = ({ instructorItem }) => {
    console.log(instructorItem)
    const { Name, Image, Role, TotalBookedSeats, ApprovedClassesId } = instructorItem
    return (
        <div>
            <div className="h-80">
                <img className="h-full w-full object-cover" src={Image} alt="" />
            </div>
            <div className='relative bg-base-300 p-3 text-center'>
                <p className="text-xs opacity-50">{Role}</p>
                <h1 className="text-primary font-semibold text-3xl">{Name}</h1>
                <p>Classes: {ApprovedClassesId.length}</p>
                <p>Total Students: {TotalBookedSeats}</p>
            </div>
        </div>
    );
};

export default InstructorCard;