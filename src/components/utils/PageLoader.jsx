import Spinner from "react-bootstrap/Spinner";
const PageLoader = () => {
  return (
    <div className="text-center mt-3">
      <Spinner animation="border" variant="dark" />
    </div>
  );
};

export default PageLoader;
