import { Carousel } from "react-bootstrap";
import ErrorBox from "../../../utils/ErrorBox";
import PageLoader from "../../../utils/PageLoader";
import "./WiserCarousal.css";
const WiserCarousal = ({ loader, data, error }) => {
  if (!loader) {
    return <PageLoader />;
  } else {
    if (error) {
      return <ErrorBox text={"Failed to load images"} />;
    } else {
      return (
        <Carousel className="wiser-carousal" fade>
          {data.map(record => (
            <Carousel.Item key={record.id}>
            <img
              className="d-block w-100"
              src={record.path}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{record.caption}</h3>
              <p>{record.descrp}</p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
        </Carousel>
      );
    }
  }
};

export default WiserCarousal;
