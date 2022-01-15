import React, { useEffect, useState } from "react";
import "./Admission.css";
import AdmissionService from "../../../services/AdmissionService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import LineBottom from "../../utils/LineBottom";
import PageLoader from "../../utils/PageLoader";
import ErrorBox from "../../utils/ErrorBox";

const Admission = () => {
  const [AdmissionData, setAdmissionData] = useState([]);
  const [AdmissionDataLoader, setAdmissionDataLoader] = useState(false);
  const [error, setError] = useState(false);

  const loadAdmissionNotifications = async () => {
    setAdmissionDataLoader(false);
    AdmissionService.loadAdmissionNotifications()
      .then((response) => {
        setAdmissionData(response);
        setAdmissionDataLoader(true);
      })
      .catch((error) => {
        setError("Failed to load Admission Data");
        setAdmissionDataLoader(true);
      });
  };

  useEffect(() => {
    loadAdmissionNotifications();
  }, []);

  console.log(AdmissionData);
  const renderAdmissionData = () => {
    return AdmissionData.data.map((admission) => (
      <li key={admission.id} className="admissionPage-list-item pl-0">
        <div className="admissionPage-iconnirfWrapper d-flex">
          <button className="admissionPage-admissionIcon ml-0">
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
          <div className="admissionPage-link">
            <a className="admissionPage-link-item" href="#">
              <span className="admissionPage-nirftitle px-2">
                {admission.title}
              </span>
            </a>
          </div>
        </div>
        <button className="admissionPage-download-btn">
          <span className="admissionPage-downloadtext">View</span>
          <FontAwesomeIcon icon={faEye} />
        </button>
      </li>
    ));
  };

  return (
    <div className="container my-5">
      <LineBottom span="Admission" text="Section" />
      <div className="container my-5">
        <ul className="admissionPage-list p-0">
          {AdmissionDataLoader ? (
            error ? (
              <ErrorBox text={error} />
            ) : (
              renderAdmissionData()
            )
          ) : (
            <PageLoader />
          )}
        </ul>
      </div>
    </div>
  );
};
export default Admission;
