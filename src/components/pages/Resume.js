import React from 'react';


const styles = {
  linkStyle: {
    color: "#f9f9f9",
  },
  listStyle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  h4Style: {
    marginTop: "30px"
  },
};

export const Resume = () => {
  return (
    <div className='resumeContainer'>
      <h1>Resume</h1>

      <p>
        Download my <a href='#' style={styles.linkStyle}>resume</a>
      </p>

      <h4 style={styles.h4Style}>Front-end Proficiencies</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h4 style={styles.h4Style}>Back-end Proficiencies</h4>
      <ul>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>

    </div>
  );
}
