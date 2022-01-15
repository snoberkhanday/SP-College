import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        <div className="row g-0">
          <div className="col-md-6 col-12 top-bar-social-icons-container">
            <ul className="top_bar_list top_bar_social_icons">
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-12 top-bar-links-container">
            <ul className="top_bar_list top_bar_links">
              <li>
                <a href="#">Directory</a>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <span>|</span>
              </li>
              <li>
                <a href="#">SP College Mail</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
