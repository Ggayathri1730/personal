import "../styles/letter.css";
import { useNavigate } from "react-router-dom";
import letterImg from "../assets/letter.png";

function Letter() {
  const navigate = useNavigate();

  return (
    <div className="letter-page">
      <div className="stars"></div>

      <h1 className="letter-title">
        A Letter For You <span>♡</span>
      </h1>

      <div className="letter-card">
        <p className="letter-text">
          Looking back, I realize there were moments where I didn’t
          understand things properly, moments where emotions and
          situations made things harder than they needed to be.
          If I ever hurt you, disappointed you, or made you feel
          less than you deserved, I’m truly sorry.
        </p>

        <p className="letter-text">
          But beyond everything, what stays closest to my heart are
          the little things — the way you cared for me, the way you
          called me “madam,” “bangaram,” and “ma,” our random silly
          conversations, the “chepuu-chepuuuu” moments, the miss
          yous, the “I love you sooooo muchhh” messages, and the
          comfort of simply having you in my life.
        </p>

        <p className="letter-text">
          These memories will always remain one of the most beautiful
          and special parts of my life. No matter where life takes us,
          no one can ever give me the kind of memories we created
          together, because what we had was ours — rare, imperfect,
          but beautiful in its own way.
        </p>

        <p className="letter-text">
          Some people quietly become a part of your heart in a way
          that never really leaves, no matter how much time passes.
          And maybe that’s why, somewhere deep inside me, there will
          always be a part of me that still looks for you in the
          quiet moments, still wonders about the “what ifs,” and
          still holds onto the comfort of what we once had.
        </p>

        <p className="letter-text">
          If life is ever kind enough to cross our paths again,
          I think my heart would still recognize yours the same
          way — softly, naturally, like home. Because some bonds
          are never really forgotten; they simply stay, quietly,
          in the corners of your heart.
        </p>

        <p className="letter-text">
          Thank you for being such an important part of my story,
          for the care, love, and moments that made ordinary days
          feel special. No matter what happens, what we shared
          will always stay special to me. ♡
        </p>
      </div>

      <div className="letter-actions">
        <button
          type="button"
          className="letter-continue-button"
          onClick={() => navigate("/ending")}
        >
          Before We Go… ♡
        </button>
      </div>

      <div className="teddy-container">
        <img
          src={letterImg}
          alt="teddy"
          className="letter-teddy"
        />
      </div>
    </div>
  );
}

export default Letter;