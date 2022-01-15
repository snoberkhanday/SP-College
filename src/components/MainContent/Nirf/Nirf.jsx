import React, { useEffect, useState } from "react";
import "./Nirf.css";
import NirfService from "../../../services/NirfService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import LineBottom from "../../utils/LineBottom";
import PageLoader from "../../utils/PageLoader";
import ErrorBox from "../../utils/ErrorBox";

const Nirf = () => {
  const [NirfData, setNirfData] = useState({});
  const [NirfDataLoader, setNirfDataLoader] = useState(false);
  const [error, setError] = useState(false);

  const loadNirfDownloads = async () => {
    setNirfDataLoader(false);
    NirfService.loadNirfDownloads()
      .then((response) => {
        setNirfData(response);
        setNirfDataLoader(true);
      })
      .catch((error) => {
        setError("Failed to load Nirf Data");
        setNirfDataLoader(true);
      });
  };

  useEffect(() => {
    loadNirfDownloads();
  }, []);

  const renderData = () => {
    return NirfData.data.map((nirf) => (
      <li key={nirf.id} className="nirfPage-list-item pl-0">
        <div className="nirfPage-iconnirfWrapper d-flex">
          <button className="nirfPage-iqacIcon ml-0">
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
          <div className="nirfPage-link">
            <a className="nirfPage-link-item" href="#">
              <span className="nirfPage-nirftitle px-2">{nirf.title}</span>
            </a>
          </div>
        </div>
        <button className="nirfPage-download-btn">
          <span className="nirfPage-downloadtext">Download</span>
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </li>
    ));
  };

  return (
    <div className="container my-5">
      <LineBottom span="NIRF" text="Section" />
      <div className="container my-5">
        <ul className="nirfPage-list p-0"></ul>
        {NirfDataLoader ? (
          error ? (
            <ErrorBox text={error} />
          ) : (
            renderData()
          )
        ) : (
          <PageLoader />
        )}
      </div>
    </div>
  );
};
export default Nirf;
