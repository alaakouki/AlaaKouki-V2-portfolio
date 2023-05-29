import React from 'react';

const styles = {
  navStyle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    // marginLeft: "50%",
    // marginRight: "-50%",
  },
  navItemStyle: {
    color: "#f9f9f9",
  },
};
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    // <ul className="nav justify-content-end">
    <ul className="nav navigate justify-content-center" style={styles.navStyle}>
      <li className="nav-item navigate-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About me
        </a>
      </li>
      <li className="nav-item navigate-item portfolioBorder" style={styles.navItemStyle}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item navigate-item contactBorder" style={styles.navItemStyle}>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item navigate-item" style={styles.navItemStyle}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
