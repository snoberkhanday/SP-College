import UpcomingEvents from "./UpcomingEvents";
import "./NewsStudentSay.css";
import StudentSay from "./StudentSay";
const LinksStudentSay = ({events, loader}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row section-row justify-content-center">
        <UpcomingEvents loader={loader} data={events} />
        <StudentSay />
      </div>
    </div>
  );
};

export default LinksStudentSay;