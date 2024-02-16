import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import imageOne from "../../images/image1.png";
import imageTwo from "../../images/image2.jpg";
import "./styles.scss";

const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  }
  const projectData = [
    {
      id: 2,
      name: "Website for Sri Ezhumalayan Sago factory",
      image: imageOne,
      link: "",
    },
    {
      id: 2,
      name: "ML/DL Model for Drug Usage Duration Classification",
      image: imageTwo,
      link: "",
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio_content_cards">
        {projectData.map((item, index) => (
          <div
            className="portfolio_content_cards_items"
            key={item.name.trim()}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
            <div className="portfolio_content_cards_items_img-wrapper">
              <a>
                <img alt="image" src={item.image} />
              </a>
            </div>
            <div className="overlay">
              {index === hoveredValue && (
                <div>
                  <p>{item.name}</p>
                  <button>Visit</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
