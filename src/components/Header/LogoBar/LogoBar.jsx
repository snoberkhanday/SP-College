import {
  faEnvelope,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LogoBar.css";
const LogoBar = () => {
  return (
    <div className="logo-bar">
      <div className="container">
        <div className="logo-bar-row">
          <div className="row">
            <div className="col-md-4 col-12 text-center">
              <img
                className="logoImg"
                src={process.env.REACT_APP_APPURL + "images/logo.png"}
                alt="sp college logo"
              />
            </div>
            <div className="col-md-4 col-12 text-center">
              <div className="row">
                <div className="col-md-6">
                  <p className="logobar-mail-box">
                    <FontAwesomeIcon icon={faEnvelope} size="3x" />
                    <span className="mailbox-text"> Mail Us today</span>
                  </p>
                  <p className="ltext">info@spcollege.edu.in</p>
                </div>
                <div className="col-md-6">
                  <p className="logobar-mail-box">
                    <FontAwesomeIcon icon={faPhone} size="3x" />
                    <span className="mailbox-text">+91-9596578388</span>
                  </p>
                  <p className="ltext">Call us for more details</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 text-center">
              <div className="inner-addon right-addon">
                <FontAwesomeIcon className="icon-search" icon={faSearch} />
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Enter your search query"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
