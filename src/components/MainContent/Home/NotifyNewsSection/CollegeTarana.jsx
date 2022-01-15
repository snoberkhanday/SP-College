const CollegeTarana = () => {
  return (
    <div className="col-lg-4 row-section">
      <section id="Dean">
        <h3 className="fs-5">
          <span>College</span> Tarana
        </h3>
        <div className="line-bottom"></div>
        <iframe
          style={{ width: "100%" }}
          height="245"
          src="https://www.youtube.com/embed/X-FpBcGwFLw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p className="mt-3"></p>
        <p className="text-justify">
          S.P College Srinagar, The Oldest And Premier Institute Of Higher
          Education In Kashmir Embodies A History Of 107 Years Of Its Glorious
          Past. It Was Established In 1905.
        </p>
        <p className="mb-2"></p>
        <a href="/chancellor-message" className="btn btn-primary btn-sm">
          Read more
        </a>
      </section>
    </div>
  );
};

export default CollegeTarana;
