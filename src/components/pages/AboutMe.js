import React from 'react';

import personalImage from "../../assets/images/personal-image.jpeg";


const styles = {
  aboutMeContainerStyle:{
    display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
  },
  myImageStyle: {
    // minWidth: "150px",
    // minHeight: "150px",
    width: "250px",
    height: "250px",
    borderRadius: "180px",
    margin: "30px"
  },
};

export const AboutMe =() => {
  return (
    <div className='aboutMeContainer' style={styles.aboutMeContainerStyle}>
      <div className='personalImage'>
        <img style={styles.myImageStyle} src={personalImage} alt="Alaa Kouki" className='myImage'/>
      </div>
      <div className='aboutMeText'>
      <h1 style={styles.fontStyle}>About me</h1>
      <p style={styles.fontStyle}>
      Hey!! I'm Alaa, welcome to my portfolio. Your gate to my world! 
      With a small spark passion to learn coding my journey began, and now I'm almost will finish my full stack web developer bootcamp with full passion to achieve my dreams as a full stack developer, seeking out to learn more and more every single day.
      </p>
      </div>
    </div>
  );
}
