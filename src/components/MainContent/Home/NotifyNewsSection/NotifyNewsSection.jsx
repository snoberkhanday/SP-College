import CollegeTarana from "./CollegeTarana";
import News from "./News";
import Notification from "./Notification";
import "./NotifyNewsSection.css";

const NotifyNewsSection = ({ loader, data, error }) => {
  return (
    <div className="section-wrapper">
      <div className="container mt-5 mb-5">
        <div className="row section-row">
          <Notification loader={loader} data={loader ? data.notifications: []} error={error}/>
          <News loader={loader} data={loader ? data.news : []} error={error}/>
          <CollegeTarana />
        </div>
      </div>
    </div>
  );
};

export default NotifyNewsSection;
