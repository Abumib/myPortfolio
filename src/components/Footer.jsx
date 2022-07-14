import React from "react";

function Footer(){
    return(
        <div className="footer col-lg-12 row">
            <div className="col-lg-12">
              <p> Designed & Built by Abubakar Lawwal</p>
            </div>
            <div className="footerIcons row col-lg-12">
              <div className="linkedinLogo icons col-lg-4"><a href="https://www.linkedin.com/in/abubakar-lawwal-38695017b/" target="_blank" rel="noopener noreferrer"> <img className="linkedinLogo" src="images/linkedin.png" /> </a></div>
              <div className="twitterLogo icons col-lg-4"><a href="https://twitter.com/Abu_lwl" target="_blank" rel="noopener noreferrer"> <img className="twitterLogo" src="images/twitter.png" /></a></div>
              <div className="githubFooterLogo icons col-lg-4"><a href="https://github.com/Abumib" target="_blank" rel="noopener noreferrer"> <img className="githubFooterLogo" src="images/github.png" /> </a></div>
            </div>
          </div>
    );
}

export default Footer;