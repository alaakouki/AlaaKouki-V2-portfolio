import React from 'react';

import Projects from "../Projects";

import groupCalendar from "../../assets/images/group-calendar-project- 2.png";
import cosmicClimate from "../../assets/images/Cosmic-Climate-preview.png";
import friendsApi from "../../assets/images/f-r-i-e-n-d-s-API--back-end.jpg";
import beSunshine from "../../assets/images/be-sunshine-weather-app-screenshot.png";
import vavoEstore from "../../assets/images/Vavo-Estore-Back-End.jpg";


const styles = {

  accordion: {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  },
  accordionItem: {
  flexBasis: "10%",
  height: "100%",
  marginBottom: "1em",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e6f8ff",
  // cursor: "pointer",
  // boxShadow: "1px 1px 0.3em #67adb5",
  },
  };


export const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <h1 className="portfolioTitle">Portfolio</h1>

      <div className="projectsContainer accordion" style={styles.accordion}>
        <div>
          {
            [
              {
                title: "Group Calendar",
                projectImage: groupCalendar,
                deployedLink:
                  "https://group-calendar.herokuapp.com/login",
                githubLink:
                  "https://github.com/Karlfranzia/group-calendar",
              },
              {
                title: "Cosmic Climate",
                projectImage: cosmicClimate,
                deployedLink:
                  "https://dingbat-weasel.github.io/Cosmic-Climate/",
                githubLink:
                  "https://github.com/dingbat-weasel/Cosmic-Climate",
              },
              {
                title: "f-r-i-e-n-d-s-API -- back-end",
                projectImage: friendsApi,
                deployedLink:
                  "https://drive.google.com/file/d/16TysC-yeZYbEIU94fzZg0q-8VpvyMeKQ/view",
                githubLink:
                  "https://github.com/alaakouki/f-r-i-e-n-d-s-API",
              },
              {
                title: "be sunshine weather app",
                projectImage: beSunshine,
                deployedLink:
                  "https://alaakouki.github.io/be-sunshine-weather-app/",
                githubLink:
                  "https://github.com/alaakouki/be-sunshine-weather-app",
              },
              {
                title: "Vavo Estore -- back-end",
                projectImage: vavoEstore,
                deployedLink:
                  "https://linhntran.github.io/work-day-scheduler/",
                githubLink:
                  "https://github.com/alaakouki/Vavo-Estore-Back-End",
              },
            ].map((project, index) => (
              // Div container for each project
              <div className="col-12 col-md-6 col-lg-4 my-2 accordionItem" key={index} style={styles.accordionItem}>
                <Projects
                  title={project.title}
                  projectImage={project.projectImage}
                  deployedLink={project.deployedLink}
                  githubLink={project.githubLink}
                />
              </div>

            ))
          }
        </div>
      </div>
    </div>
  );
}
