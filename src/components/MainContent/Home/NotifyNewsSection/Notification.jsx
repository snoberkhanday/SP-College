import {
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageLoader from "../../../utils/PageLoader";
import ErrorBox from "../../../utils/ErrorBox";

//TODO: Look at the date in the notification item and see if it is written correctly

const Notification = ({loader, data, error}) => {
  return (
    <div className="col-lg-4 row-section">
      <section id="PrincipalsMessage">
        <h3 className="fs-5"> <span>Latest</span> Notifications</h3>
        <div className="line-bottom"></div>

        {!loader ? (
              <PageLoader />
            ) : error ? (
              <ErrorBox text={"Failed to load message"} />
            ) : (
              <ul className="news-list">
              {data.map(notification => (
               <li key={notification.id}>
                 <a href=""> {notification.title} </a>
                 <p className="date-of-news">
                   <FontAwesomeIcon icon={faCalendarAlt} />
                   <span>{new Date(notification.updated_at).toLocaleDateString("default", {month: 'long'})}</span>&nbsp;
                   <span>{new Date(notification.updated_at).getDate()}</span>, &nbsp;
                   <span>{new Date(notification.updated_at).getFullYear()}</span>
                 </p>
               </li>
              ))}
             </ul>
            )
        }
        <p className="mb-2"></p>
        <a href="/chancellor-message" className="btn btn-primary btn-sm">
          View All
        </a>
      </section>
    </div>
  );
};

export default Notification;
