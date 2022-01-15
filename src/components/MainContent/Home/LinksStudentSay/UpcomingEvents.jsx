import {
  faArrowCircleRight,
  faCalendarAlt,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageLoader from "../../../utils/PageLoader";
import ErrorBox from "../../../utils/ErrorBox";

const UpcomingEvents = ({data, error, loader}) => {
  return (
    <div className="col-lg-4 row-section">
      <section id="Dean">
        <h3 className="fs-5">
          <span>Upcoming</span> Events
        </h3>
        <div className="line-bottom"></div>

        {!loader ? (
              <PageLoader />
            ) : error ? (
              <ErrorBox text={"Failed to load message"} />
            ) : (
              data.length === 0 ? (
                <ul className="download-list">
                  <li className="no-upcoming-events">
                      <p>
                        <FontAwesomeIcon icon={faArrowCircleRight} /> No Upcoming events
                      </p>
                  </li> 
                </ul>
              ) : (
                <>
                <ul className="download-list">
                  {data.map(event => {
                  <li>
                    <a href="">
                      <p data-new="new">
                        <FontAwesomeIcon icon={faArrowCircleRight} /> English Poetry in
                        Kashmir
                      </p>
                      <p className="category-date">
                        <span>
                          <FontAwesomeIcon icon={faMapMarker} /> Department of English
                        </span>
                        <span style={{ margin: "0 10px" }}>|</span>
                        <span>
                          <FontAwesomeIcon icon={faCalendarAlt} /> December 12th, 2021
                        </span>
                      </p>
                    </a>
                  </li>
                })}
                </ul>
                <a href="/chancellor-message" className="btn btn-primary btn-sm">
                  View All
                </a> 
                </> 
              )
            )}
      </section>
    </div>
  );
};

export default UpcomingEvents;
