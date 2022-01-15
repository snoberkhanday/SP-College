import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CollegeService from "../../../services/CollegeService";
import ErrorBox from "../../utils/ErrorBox";
import PageLoader from "../../utils/PageLoader";
import "./CCollegeService.css";

const CCollegeService = () => {
  let { slug } = useParams();
  const [serviceData, setServiceData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadServiceItem();
  }, [slug]);
  const loadServiceItem = () => {
    setLoaded(false);
    CollegeService.loadServiceItem(slug)
      .then((response) => {
        setServiceData(response);
        setLoaded(true);
      })
      .catch((error) => {
        setError(true);
        setLoaded(true);
      });
  };

  if (!loaded) {
    return <PageLoader />;
  } else {
    if (error) {
      return <ErrorBox text="Failed to load the service data" />;
    } else {
      return (
        <div className="container my-5">
          <div className="mb-4 section-row">
            <h3 className="fs-5">
              <span>{serviceData.name}</span>
            </h3>
            <div className="line-bottom"></div>
          </div>

          <div
            className="CCollegeService-ServiceData"
            dangerouslySetInnerHTML={{ __html: serviceData.content }}
          />
        </div>
      );
    }
  }
};

export default CCollegeService;
