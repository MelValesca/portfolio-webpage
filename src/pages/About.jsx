import React from "react";
import Screen from "../components/Screen";
import Slider from "../components/Slider";
import Profile from "../components/Profile";

const About = () => {
  const introduction = {
    image: "/img/me.jpeg",
    title: "Introduction",
    content: [
      "I discovered my passion for technology at the age of 12, when I began creating user layouts and websites for an online game I enjoyed. Through experimentation with HTML, CSS, and JavaScript, I developed a genuine enthusiasm for web development that would stay with me throughout my life. Although I initially pursued a career in law enforcement, driven by a strong sense of justice, I eventually felt compelled to return to computer science.",
      "This blend of law enforcement experience and technical curiosity sparked my fascination with cybersecurity. As I furthered my studies, I took part in numerous Capture the Flag (CTF) competitions, honing my skills in vulnerability detection and exploitation. In addition, I manage the Discord server for my university’s computer science program, which grew to over 2,100 members under my supervision. These experiences have allowed me to combine my commitment to justice with my passion for technology in a truly meaningful way.",
    ],
  };

  const interests = {
    image: "/img/React.png",
    title: "Interests",
    content: [
      "I enjoy building full-stack web and mobile applications and thrive on the challenge of solving complex problems. My interest in cybersecurity, particularly in web and system security, stems from a desire to ensure that the solutions I develop are both robust and protected against potential vulnerabilities.",
      "Here are some of my career interests and areas of expertise:",
      <ul>
        <li>Information Security</li>
        <li>Software Engineering</li>
        <li>Mobile Application Development</li>
        <li>Web Applications and Systems</li>
        <li>Desktop Application Engineering</li>
      </ul>,
    ],
  };

  const slides = [
    {
      id: 1,
      content: (
        <div className="slideContent">
          <Profile
            image={introduction.image}
            title={introduction.title}
            content={introduction.content}
          />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="slideContent">
          <Profile
            image={interests.image}
            title={interests.title}
            content={interests.content}
          />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="slideContent">
          <Profile
            image={introduction.image}
            title={introduction.title}
            content={introduction.content}
          />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="slideContent">
          <Profile
            image={introduction.image}
            title={introduction.title}
            content={introduction.content}
          />
        </div>
      ),
    },
  ];

  return (
    <Screen title="About Me">
      <Slider slides={slides} />
    </Screen>
  );
};

export default About;
