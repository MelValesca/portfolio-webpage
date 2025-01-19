import React from "react";
import Screen from "../components/Screen";
import TextZone from "../components/TextZone";
import "../styles/Table.css";

const Home = () => {
  return (
    <Screen title="Welcome !">
      <h3>This website is Under Construction </h3>
      <TextZone
        content="Welcome to my personal portfolio website, which is currently a work 
        in progress! So far, I've nearly completed my 'About Me' page, where you can 
        learn more about my academic and professional journey. I am currently working 
        on completing my 'Projects' pages. I'm a student in Computer Science and Software 
        Engineering, set to graduate in April 2025. Following my graduation, I will be 
        starting a professional master's program in Software Engineering, which includes 
        multiple internships.Please bear with me as I continue to develop the overall design 
        and functionality of the site. I'm excited to share my progress and connect with you 
        through this platform. Stay tuned for updates!"
      />

      <h4 className="TableName">Website Update History</h4>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Page</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-01-19</td>
            <td>Home</td>
            <td>
              Created the page, added a welcome message, and integrated a table
              displaying the latest updates.
            </td>
          </tr>
          <tr>
            <td>2025-01-12</td>
            <td>Projects</td>
            <td>
              Designed and created the page. Added content for the Curler
              project.
            </td>
          </tr>
          <tr>
            <td>2025-01-12</td>
            <td>About Me</td>
            <td>
              Created, curated and added all the content of the page with
              initial design.
            </td>
          </tr>
          <tr>
            <td>2025-01-11</td>
            <td>All pages</td>
            <td>Website creation.</td>
          </tr>
        </tbody>
      </table>
    </Screen>
  );
};

export default Home;
