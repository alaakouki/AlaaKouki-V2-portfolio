import React from "react";

// import NavTabs from "./NavTabs";
// import PortfolioContainer from "./PortfolioContainer";


const styles = {
    headerContainerStyle:{
      display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
    },
    portfolioTitleStyle: {
        fontSize: "48px",
        letterSpacing: "2px",
    },
}

function Header() {

    return (
        <div className="header-Container" style={styles.headerContainerStyle}>
            <h1 className="portfolioTitle" style={styles.portfolioTitleStyle}>Alaa Kouki</h1>
            {/* <NavTabs/> */}
            {/* <PortfolioContainer/> */}

        </div>
    );
}
export default Header;
