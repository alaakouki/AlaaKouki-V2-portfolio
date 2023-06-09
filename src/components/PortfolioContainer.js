import React, { useState } from "react";
import NavTabs from "./NavTabs";
// import AboutMe from "./pages/AboutMe";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import Resume from "./pages/Resume";

import { AboutMe, Contact, Portfolio, Resume } from "./pages";

// export default function PortfolioContainer() {
function PorfolioContainer () {

    const [currentPage, setCurrentPage] = useState("AboutMe");

    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />;
        }
        if (currentPage === "Portfolio") {
            return <Portfolio />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
    };

const handlePageChange = (page) => setCurrentPage(page);

return (
    <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
);
}

export default PorfolioContainer;