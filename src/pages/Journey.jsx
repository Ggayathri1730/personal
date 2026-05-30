import "../styles/journey.css";
import { useNavigate } from "react-router-dom";

import meetImg from "../assets/meet.jpeg";
import hydImg from "../assets/hyd.png";
import momentImg from "../assets/moment.png";
import teddyImg from "../assets/teddy.png";

function Journey() {
  const navigate = useNavigate();

  const memories = [
    {
      date: "June 22, 2025",
      title: "First Meet ♡",
      text:
        "The day we finally met for the first time. A moment that quietly became special to me.",
      image: meetImg,
    },
    {
      date: "July 13, 2025",
      title: "Before Hyderabad ♡",
      text:
        "Before going to Hyderabad, we met again. Even a little time together felt comforting.",
      image: hydImg,
    },
    {
      date: "July 13, 2025",
      title: "A Beautiful Moment ♡",
      text:
        "Some moments are too special for words, but impossible to forget.",
      image: momentImg,
    },
  ];

  return (
    <div className="journey-page">
      <div className="stars"></div>

      <h1 className="journey-title">♡ Our Journey ♡</h1>

      <p className="journey-subtitle">
        Every moment with you is my favorite memory. 💖
      </p>

      <div className="timeline">
        {memories.map((memory, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-date">
              {memory.date}
            </div>

            <div className="timeline-dot">💖</div>

            <div className="memory-card">
              <div className="photo-frame">
                <img
                  src={memory.image}
                  alt={memory.title}
                />
              </div>

              <div className="memory-content">
                <h2>{memory.title}</h2>
                <p>{memory.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="teddy-section">
        <img
          src={teddyImg}
          alt="teddy"
          className="teddy-img"
        />
      </div>

      <div className="more-btn-container">
        <button
          className="more-btn"
          onClick={() => navigate("/littlethings")}
        >
          More Memories →
        </button>
      </div>
    </div>
  );
}

export default Journey;