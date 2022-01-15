import ErrorBox from "../../../utils/ErrorBox";
import PageLoader from "../../../utils/PageLoader";
const MessageSection = ({ loader, data, error }) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row section-row">
        <div className="col-lg-4 row-section">
          <section id="Dean">
            <h3 className="fs-5">
              <span>Dean's</span> Message
            </h3>
            <div className="line-bottom"></div>
            {!loader ? (
              <PageLoader />
            ) : error ? (
              <ErrorBox text={"Failed to load message"} />
            ) : (
              <>
                <img
                  src={process.env.REACT_APP_APPURL + "images/dean.jpg"}
                  className="img-fullwidth"
                  alt="Shri Manoj"
                  title="https://beta.bgsbu.ac.in/storage/photos/3/Administrative/LG7.jpg"
                />
                <p className="mt-3"></p>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis similique
                  accusantium nemo autem....
                </p>
                <p className="mb-2"></p>
                <a
                  href="/chancellor-message"
                  className="btn btn-primary btn-sm"
                >
                  Read more
                </a>
              </>
            )}
          </section>
        </div>
        <div className="col-lg-4 row-section">
          <section id="PrincipalsMessage">
            <h3 className="fs-5">
              <span>Principal's</span> Message
            </h3>
            <div className="line-bottom"></div>
            {!loader ? (
              <PageLoader />
            ) : error ? (
              <ErrorBox text={"Failed to load message"} />
            ) : (
              <>
                <img
                  src={data.prin_photo}
                  className="img-fullwidth"
                  alt="Professor Akbar Masood"
                  title="https://beta.bgsbu.ac.in/storage/photos/3/Administrative/vcofficethumbnail.jpg"
                />
                <p className="mt-3"></p>
                <p className="text-justify" dangerouslySetInnerHTML={{ __html: data.principal.substring(0, 259) + ".." }}>
                </p>
                <p className="mb-2"></p>
                <a
                  href="/chancellor-message"
                  className="btn btn-primary btn-sm"
                >
                  Read more
                </a>
              </>
            )}
          </section>
        </div>
        <div className="col-lg-4 row-section">
          <section id="About">
            <h3 className="fs-5">
              <span>About</span> SP College
            </h3>
            <div className="line-bottom"></div>
            {!loader ? (
              <PageLoader />
            ) : error ? (
              <ErrorBox text={"Failed to load content"} />
            ) : (
              <>
                <img
                  src={process.env.REACT_APP_APPURL + "images/about.jpg"}
                  className="img-fullwidth"
                  alt=""
                />
                <p className="mt-3"></p>
                <p className="text-justify"  dangerouslySetInnerHTML={{ __html: data.about.substring(0, 241) + ".." }}>
                </p>
                <p className="mb-2"></p>
                <a
                  href="/chancellor-message"
                  className="btn btn-primary btn-sm"
                >
                  Read more
                </a>
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
