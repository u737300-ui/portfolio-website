import "./styles/TechStackNew.css";
import { config } from "../config";

const TechStackNew = () => {
  const tools = [...config.skills.develop.tools, ...config.skills.design.tools];

  return (
    <div className="techstack-new">
      <div className="techstack-video-container">
        <video autoPlay loop muted playsInline className="techstack-video">
          <source src="/video/video.webm" type="video/webm" />
        </video>
        <div className="techstack-overlay"></div>
      </div>
      <div className="techstack-content">
        <h2>Technical areas</h2>
        <div className="techstack-pyramid">
          <div className="techstack-row">
            {tools.map((tool) => (
              <div key={tool} className="techstack-item" title={tool}>
                <span className="techstack-mark" aria-hidden="true">{tool.slice(0, 2).toUpperCase()}</span>
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
