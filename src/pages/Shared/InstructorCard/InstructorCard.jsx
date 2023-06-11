
const InstructorCard = ({ instructorItem }) => {
    const { Name, Image, Email, Role, TotalBookedSeats, ApprovedClassesId } = instructorItem
    return (
        <div className="rounded-mb overflow-hidden">
            <div className="h-80">
                <img className="h-full w-full object-cover" src={Image} alt="" />
            </div>
            <div className='relative bg-base-300 p-3 text-center'>
                <p className="text-xs opacity-50">{Role}</p>
                <h1 className="text-primary font-semibold text-3xl">{Name}</h1>
                <p className="text-xs text-secondary mb-3">{Email}</p>
                <p>Classes: {ApprovedClassesId.length}</p>
                <p>Total Students: {TotalBookedSeats}</p>
            </div>
        </div>
    );
};

export default InstructorCard;