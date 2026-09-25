import "./styles/Career.css";
import { config } from "../config";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Working <span>focus</span>
          <br /> and approach
        </h2>
        <div className="career-info">
          <div className="career-timeline"><div className="career-dot"></div></div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Current focus</h4>
                <h5>{config.developer.title}</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>{config.developer.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
