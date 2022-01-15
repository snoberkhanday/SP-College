const LineBottom = ({ span, text, ...props }) => {
  return (
    <div className={"mb-4 section-row " + props.className}>
      <h3 className="fs-5">
        <span>{span}</span> {text}
      </h3>
      <div className="line-bottom"></div>
    </div>
  );
};

export default LineBottom;
