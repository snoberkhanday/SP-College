import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const IqacDownloads = ({ Iqacs }) => {
  return (
    <div>
      <div className="iqacPage-linksContainer">
        <ul className="iqacPage-list p-0">
          {Iqacs.map((iqac) => (
            <li key={iqac.id} className="iqacPage-list-item pl-0">
              <div className="iqacPage-iconiqacWrapper d-flex">
                <button className="iqacPage-iqacIcon ml-0">
                  <FontAwesomeIcon icon={faArrowCircleRight} />
                </button>
                <div className="IqacPage-link">
                  <a className="iqacPage-link-item" href="#">
                    <span className="iqacPage-iqactitle px-2">
                      {iqac.title}
                    </span>
                  </a>
                </div>
              </div>
              <button className="iqacPage-download-btn">
                <span className="iqacPage-downloadtext">Download</span>
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IqacDownloads;
