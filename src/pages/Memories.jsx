import "../styles/memories.css";
import { useNavigate } from "react-router-dom";
import teddyImg from "../assets/teddy.png";

function Memories() {
  const navigate = useNavigate();

  return (
    <div className="memories-page">
      <div className="stars"></div>

      <h1 className="memories-title">
        Our Little Chats <span>♡</span>
      </h1>

      <p className="memories-subtitle">
        Random chats but my most favorite moments 💖
      </p>

      <div className="chat-container">

        <div className="chat left">
          <div className="bubble dark">
            Reached, ma? 💖
          </div>
          <span className="time">6:15 PM</span>
        </div>

        <div className="chat right">
          <div className="bubble pink">
            Ha subuu 💕
          </div>
          <span className="time">6:15 PM</span>
        </div>

        <div className="chat right">
          <div className="bubble pink">
            Miss you kanna 😭 💕
          </div>
          <span className="time">11:44 PM</span>
        </div>

        <div className="chat left">
          <div className="bubble dark">
            Miss you too ma 💖
          </div>
          <span className="time">11:44 PM</span>
        </div>

        <div className="chat left">
          <div className="bubble dark">
           bangaram 🥹
          </div>
          <span className="time">8:30 PM</span>
        </div>

        <div className="chat right">
          <div className="bubble pink">
            chepu kanna 
          </div>
          <span className="time">8:30 PM</span>
        </div>

        <div className="chat left">
          <div className="bubble dark">
            Chepu
          </div>
        </div>

        <div className="chat right">
          <div className="bubble pink">
            Chepuu
          </div>
        </div>

        <div className="chat left">
          <div className="bubble dark">
            Chepuuu
          </div>
        </div>

        <div className="chat right">
          <div className="bubble pink">
            Chepuuuu 
          </div>
        </div>

        <div className="chat left">
          <div className="bubble dark">
            I love you soo much ma ❤️
          </div>
        </div>

        <div className="chat right">
          <div className="bubble pink">
            I love you sooooo muchhh kanna 💕
          </div>
        </div>

        <div className="chat left">
          <div className="bubble dark">
            Goodnight bangaram ❤️
          </div>
        </div>

        <div className="chat right">
          <div className="bubble pink">
            Goodnight kanna 🥹💖
          </div>
        </div>
      </div>

      <div className="bottom-box">
        <img
          src={teddyImg}
          alt="teddy"
          className="small-teddy"
        />

        <p>
          These little conversations made the distance feel so much smaller. 💖
        </p>

        <div className="button-row">
          <button
            type="button"
            className="memories-button"
            onClick={() => navigate("/letter")}
          >
            A Letter For You 💌 →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Memories;