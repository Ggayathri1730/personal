import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/home.css";
import homeImg from "../assets/home.png";

function Home() {
  return (
    <div className="home">
      <div className="stars"></div>
      <div className="home-cloud cloud-a"></div>
      <div className="home-cloud cloud-b"></div>
      <div className="home-cloud cloud-c"></div>

      <motion.div
        className="heart-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="heart"></div>

        <h1 className="title">1 Year</h1>
        <p className="subtitle">
          One year, countless memories ✨
        </p>

        <Link to="/journey">
          <button className="story-btn">
            Open Our Story 💖
          </button>
        </Link>
      </motion.div>

      <motion.div
        className="teddy"
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <img src={homeImg} alt="home teddy" className="home-teddy-img" />
      </motion.div>
    </div>
  );
}

export default Home;