import {
  faCaretRight,
  faEnvelope,
  faFax,
  faLocationArrow,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer-container pt-5 pb-5">
          <div className="row">
            {/* logo and address information */}
            <div className="col-md-3 column1">
              <div className="white-logo">
                <img
                  src={process.env.REACT_APP_APPURL + "images/white-logo.png"}
                  alt=""
                />
              </div>
              <ul className="tg-infolist">
                <li>
                  <address>
                    <FontAwesomeIcon icon={faLocationArrow} /> M.A Road,
                    Srinagar, J&amp;K, India
                  </address>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faPhoneAlt} /> 0194-2476828
                  </span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faFax} /> 0194-2476824
                  </span>
                </li>
                <li>
                  <a href="mailto:info@spcollege.edu.in">
                    <span>
                      <FontAwesomeIcon icon={faEnvelope} />{" "}
                      info@spcollege.edu.in
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* important links */}
            <div className="col-md-5 offset-md-1 important-links">
              <h5>Important Links</h5>
              <div className="line-bottom-links"></div>
              <div className="row">
                <div className="col-6 col-sm-6 col-md-5">
                  <ul className="footer-links">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faCaretRight} />
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about-the-university">
                        <FontAwesomeIcon icon={faCaretRight} />
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/all/admission/notifications">
                        {" "}
                        <FontAwesomeIcon icon={faCaretRight} />
                        Admission
                      </a>
                    </li>
                    <li>
                      <a href="/all/results/notifications">
                        <FontAwesomeIcon icon={faCaretRight} />
                        Result
                      </a>
                    </li>
                    <li>
                      <a href="/all/exam/notifications">
                        <FontAwesomeIcon icon={faCaretRight} />
                        Examinations
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCaretRight} />
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-5">
                  <ul className="footer-links">
                    <li>
                      <a href="/">
                        <FontAwesomeIcon icon={faCaretRight} />
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/about-the-university">
                        <FontAwesomeIcon icon={faCaretRight} />
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/all/admission/notifications">
                        <FontAwesomeIcon icon={faCaretRight} />
                        Admission
                      </a>
                    </li>
                    <li>
                      <a href="/all/results/notifications">
                        <FontAwesomeIcon icon={faCaretRight} />
                        Result
                      </a>
                    </li>
                    <li>
                      <a href="/all/exam/notifications">
                        <FontAwesomeIcon icon={faCaretRight} />
                        Examinations
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faCaretRight} />
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Social Presence */}
            <div className="col-md-3 important-links">
              <h5>Our Social Presence</h5>
              <div className="line-bottom-links"></div>
              <div className="iframe-div">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fspcollegeofficial%2F&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  height="154"
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                &copy; Copyright to{" "}
                <span style={{ fontWeight: "bold" }}>
                  Sri Pratap College Srinagar
                </span>
                . All rights reserved
              </p>
            </div>
            <div className="col-md-6">
              <p className="text-end">
                Developed and maintained by{" "}
                <a style={{ fontWeight: "bold" }} href="http://codemites.com">
                  CodeMites
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
