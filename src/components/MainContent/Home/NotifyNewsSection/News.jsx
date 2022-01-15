import {
  faArrowRight,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorBox from "../../../utils/ErrorBox";
import PageLoader from "../../../utils/PageLoader";

const News = ({loader, data, error}) => {
  return (
    <div className="col-lg-4 row-section">
      <section id="About">
        <h3 className="fs-5">
          <span>Recent</span> News
        </h3>
        <div className="line-bottom"></div>

        {!loader ? (
              <PageLoader />
            ) : error ? (
              <ErrorBox text={"Failed to load message"} />
            ) : (
          <div className="newsSection-latest-news-list">
            {data.map(newsRecord => (
              <div key={newsRecord.id} className="row mb-3">
              <div className="col-md-3 col-3">
                <img
                  style={{ height: "55px" }}
                  src={newsRecord.file != null ? newsRecord.file : process.env.REACT_APP_APPURL + "images/news.jpg"}
                />
              </div>
              <div className="col-md-9 col-9">
                <p>
                  <a data-new="new" href="">
                    {newsRecord.title}
                  </a>
                </p>
                <p style={{ marginTop: "2px" }} className="date-of-news">
                  <span>
                    <FontAwesomeIcon icon={faCalendarAlt} /> 
                    <span>{new Date(newsRecord.updated_at).toLocaleDateString("default", {month: 'long'})}</span>&nbsp;
                  <span>{new Date(newsRecord.updated_at).getDate()}</span>, &nbsp;
                  <span>{new Date(newsRecord.updated_at).getFullYear()}</span>
                  </span>
                  <span style={{ margin: "0 5px" }}>|</span>
                  <span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> SP College
                  </span>
                </p>
                <a href="">
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
            ))}
            </div>
            )}

        <p className="mb-2"></p>
        <a href="/chancellor-message" className="btn btn-primary btn-sm">
          View All
        </a>
      </section>
    </div>
  );
};

export default News;
