import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { Animate } from "react-simple-animate";

const Home = () => {
  const navigate = useNavigate();

  const handleHireme = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home_text-wrapper">
        <h1>
          Hello, I'm Ashraf.
          <br></br>
          Computer Science Student
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="home_contact-me">
          <button onClick={handleHireme}>Hire me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
