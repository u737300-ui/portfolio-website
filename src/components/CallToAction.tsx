import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <a href="#work" className="cta-btn cta-btn-play" data-cursor="disable">View Projects →</a>
        <a href="#contact" className="cta-btn cta-btn-hire" data-cursor="disable">Contact →</a>
      </div>
    </div>
  );
};

export default CallToAction;
