import React from 'react';

import Projects from "../Projects";

import groupCalendar from "../../assets/images/group-calendar-project- 2.png";
import cosmicClimate from "../../assets/images/Cosmic-Climate-preview.png";
import friendsApi from "../../assets/images/f-r-i-e-n-d-s-API--back-end.jpg";
import beSunshine from "../../assets/images/be-sunshine-weather-app-screenshot.png";
import vavoEstore from "../../assets/images/Vavo-Estore-Back-End.jpg";





export const Portfolio = () => {
  return (
    <div className="portfolioContainer">
      <h1 className="portfolioTitle">Portfolio</h1>

      <div className="projectsContainer accordion">
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
                  "https://drive.google.com/file/d/1fYxK-fCQtPbWtxnr91_oaQsnBwMKarTO/view",
                githubLink:
                  "https://github.com/alaakouki/Vavo-Estore-Back-End",
              },
            ].map((project, index) => (
              // Div container for each project
              <div className="col-md-6 accordionItem" key={index}>
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
