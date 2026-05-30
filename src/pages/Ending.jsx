import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ending.css";
import teddyImg from "../assets/teddy.png";
import hugImg from "../assets/hug.png";

function Ending() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="ending-page">
      <div className="ending-stars"></div>

      <div className="floating-heart heart-1"></div>
      <div className="floating-heart heart-2"></div>
      <div className="floating-heart heart-3"></div>
      <div className="floating-heart heart-4"></div>
      <div className="floating-heart heart-5"></div>

      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>

      <div className="ending-content">
        <header className="ending-header">
          <h1>A Year To Remember <span>♡</span></h1>
          <p>One year of us, a lifetime of memories to go...</p>
        </header>

        <div className="ending-card">
          <div className="ending-card-inner">
            <p>
              One year… and somehow, it still feels unreal how many little
              moments became such a big part of my heart.
            </p>

            <p>
              From our first meet, random chats, silly “chepuu” moments, miss
              yous, love you so muchhh’s, and every silly little thing in
              between — this year gave me memories I know I’ll always hold
              close.
            </p>

            <p>
              We weren’t perfect, and maybe we had misunderstandings, hard
              days, and moments where things felt difficult too. But even
              through all of that, one thing I’ll always be grateful for is
              this — somehow, neither of us really let go. And maybe that says
              something beautiful about us.
            </p>

            <p>
              Thank you for the care, the love, the comfort, the effort, the
              fights we solved, the laughs we shared, and for being the person
              who made ordinary days feel special without even trying.
            </p>

            <p>
              No matter how much time passes, these memories will always stay
              special in my life. No one can ever give me the kind of moments
              we created together, because they were ours — imperfect, messy
              at times, but beautiful in the way only we could understand.
            </p>

            <p>
              Happy One Year, Kanna ♡
            </p>

            <p className="ending-card-note">
              Here’s to all the memories we made… and the ones still waiting
              for us. 💖
            </p>
          </div>
        </div>

        <div className="ending-actions">
          <button
            type="button"
            className="hug-button"
            onClick={() => setIsModalOpen(true)}
          >
            Hug ♡
          </button>
        </div>

        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/journey")}
        >
          Back To Memories ♡
        </button>

        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/")}
        >
          Start Again ♡
        </button>
      </div>

      <img src={teddyImg} alt="teddy" className="ending-teddy" />

      {isModalOpen && (
        <div className="ending-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="ending-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="modal-image-wrapper">
              <img
                src={hugImg}
                alt="hugging teddies"
                className="modal-image"
              />
            </div>

            <p className="modal-text">
              We had misunderstandings, hard days, and moments where things felt
              difficult too… but thank you for staying, for trying, and for all
              the beautiful memories we created together. I’m sorry for the times
              I hurt you, disappointed you, or made things harder than they
              should have been. No matter what, these memories will always mean
              a lot to me. ♡
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ending;