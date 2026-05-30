import "../styles/littlethings.css";
import { useNavigate } from "react-router-dom";
import teddyImg from "../assets/teddy.png";

const littleThings = [
  "The way you care\nabout me. 💖",
  "Your cute\nannoying habits. 😊",
  "The effort you put\nin for me. 💖",
  "The way you\nmake me laugh. 😊",
  "Your random\nsweet messages. 💌",
  "The way you\nunderstand me. 💖",
  "Even when you’re mad,\nthe care hidden in your\nwords still melts me. 💖",
];

function LittleThings() {
  const navigate = useNavigate();

  return (
    <div className="littlethings-page">
      <div className="sparkles"></div>

      <h1 className="littlethings-title">
        Little Things<span>♡</span>
      </h1>

      <p className="littlethings-subtitle">
        It’s the small things you do,<br />
        the ones that stay in my heart,<br />
        that mean the most to me. 🌸
      </p>

      <div className="notes-container">
        {littleThings.slice(0, 6).map((item, index) => (
          <div className="note-card" key={index}>
            <div className="tape"></div>
            <p style={{ whiteSpace: "pre-line" }}>{item}</p>
          </div>
        ))}
      </div>

      <div className="bottom-note">
        <div className="tape"></div>
        <p style={{ whiteSpace: "pre-line" }}>
          {littleThings[6]}
        </p>
      </div>

      <div className="button-row">
        <button
          className="memories-button"
          type="button"
          onClick={() => navigate("/memories")}
        >
          Our Little Chats →
        </button>
      </div>

      <img
        src={teddyImg}
        alt="teddy"
        className="teddy left-teddy"
      />

      <img
        src={teddyImg}
        alt="teddy"
        className="teddy right-teddy"
      />
    </div>
  );
}

export default LittleThings;