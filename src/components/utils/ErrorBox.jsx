import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ErrorBox = ({ text }) => {
  return (
    <div className="alert alert-danger text-center error-box">
      <h1>
        <FontAwesomeIcon icon={faExclamationCircle} />
      </h1>
      <h5>
        <span style={{ fontWeight: "bold" }}>Oops ! </span>Something went wrong.
      </h5>
      <h6>{text ? text : "Failed to load data."}.</h6>
    </div>
  );
};
export default ErrorBox;
