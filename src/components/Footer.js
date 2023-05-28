import React from "react";

const styles = {
    pageFooterStyle: {
        marginLeft: "50%",
        marginRight: "-50%",
    },
    footerStyle: {
        margin: "30px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    footerItems: {
        marginLeft: "15px",
        marginRight: "15px",
        size: "30px",
        listStyle: "none",
        color: "white",
    },
    footerIcons: {
        color: "#f9f9f9",
    },
};


function Footer() {

    return (
        <div className="pageFooter">
            <ul style={styles.footerStyle} className="icons-container">
                <li style={styles.footerItems}>
                    <a href="https://github.com/alaakouki?tab=repositories" target={"_blank"} rel="noopener noreferrer" style={styles.footerIcons}><i class="bi bi-github"></i></a>
                    </li>
                <li style={styles.footerItems}>
                    <a href="https://www.linkedin.com/in/alaa-kouki-973478109/" target={"_blank"} rel="noopener noreferrer" style={styles.footerIcons}><i class="bi bi-linkedin"></i></a>
                    </li>
                <li style={styles.footerItems}>
                    <a href="https://stackoverflow.com/users/21675566/alaa-kouki" target={"_blank"} rel="noopener noreferrer" style={styles.footerIcons}><i class="bi bi-stack-overflow"></i></a>
                    </li>
            </ul>

        </div>
    );
}
export default Footer;
