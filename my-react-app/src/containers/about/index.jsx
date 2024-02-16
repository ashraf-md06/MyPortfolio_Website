import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const personalDetails = [
  {
    label: "Name",
    value: "Muhammed Ashraf",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Address",
    value: "Tamilnadu, India",
  },
  {
    label: "Email",
    value: "ashrafmd1106@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 9629689774",
  },
];

const jobSummary =
  "Enthusiastic and skilled Computer Science student aiming to contribute to the betterment of the company and society by leveraging my expertise in web development and machine learning. Eager to apply my talents and abilities to drive innovation and success, while continuously learning and growing in a dynamic professional environment";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about_content">
        <div className="about_content_personalwrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              tranform: "translateX(0px)",
            }}
          >
            <h3>Computer Science Student</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalinfo">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
