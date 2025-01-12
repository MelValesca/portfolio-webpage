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

  const technologies = {
    image: "/img/Dev_TechnologyPage_LogoCloud.jpeg",
    title: "Technologies",
    content: [
      <ol>
        <li>
          <strong>Most Comfortable:</strong>
          <ul>
            <li>Languages: Python, JavaScript, TypeScript, Java, C </li>
            <li>Frameworks: Flask, React, Node</li>
            <li>SQL: SQLite, PostgreSQL</li>
          </ul>
        </li>
        <li>
          <strong>Proficient:</strong>
          <ul>
            <li>Languages: C++, Bash, PHP, C# </li>
            <li>Frameworks: Vue.js, Next.js</li>
            <li>SQL: MariaDB</li>
          </ul>
        </li>
        <li>
          <strong>Basic Knowledge:</strong>
          <ul>
            <li>Prolog, OCaml, Pep8 (assembly)</li>
            <li>Frameworks: Spring boot</li>
            <li>SQL: Oracle</li>
          </ul>
        </li>
      </ol>,
    ],
  };

  const awards = {
    image: "/img/award.jpg",
    title: "Honors and Awards",
    content: [
      "Here are some recent competitions i have participated in: ",
      <ul>
        <li>
          <strong>Linux Meetup</strong> CTF 2024, 1st place (team Table 47a)
        </li>
        <li>
          <strong>HackFest</strong> CTF Classic 2024, 1st place (team Table 17)
        </li>
        <li>
          <strong>NorthSec</strong> CTF 2024 12ᵗʰ place (team Hubière Hackin’’)
        </li>
        <li>
          <strong>JFFI</strong> CTF 2024, 1st place (team She Sharp)
        </li>
        <li>
          <strong>Computer Science Games</strong> 2024, CTF, 3rd place (team
          touch grass.c)
        </li>
        <li>
          <strong>@Hack</strong> CTF 2024, 1st place (team Hubert @Hackin’’)
        </li>
        <li>
          <strong>CyberSci</strong> regionals CTF 2023 1st place (team Hackers
          des Sciences)
        </li>
        <li>
          <strong>JFFI</strong> CTF 2023, 3rd place (team Java Pas Tor)
        </li>
      </ul>,
      "I hope to participate in many more in the year to come !",
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
            image={technologies.image}
            title={technologies.title}
            content={technologies.content}
          />
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="slideContent">
          <Profile
            image={awards.image}
            title={awards.title}
            content={awards.content}
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
