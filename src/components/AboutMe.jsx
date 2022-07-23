function AboutMe(){
    return (
        <div className="aboutMeSection col-lg-12">
            <div className="aboutMeLogoDiv">
              <h1 className="aboutMeLogo align-baseline heading"><span className="numbering">01.</span> About Me</h1>
            </div>
            <div className="aboutMeContentDiv row">
              <div className="aboutMeText col-lg-6">
                <p>Hello! I'm Abubakar. I graduated with a bachelors in software engineering from the American university of Nigeria. My interest in computer science started when I searched the meaning of digital nomad.
Yeah I know, the dream life of an 18 year old. So I pludged into the world of computer science and loved it. With what I could do, I thought i was to become the next mark Zuckerberg. I learnt the hardway. And my dreams about being a digital nomad? ABANDONED. Just Kidding</p>
                <br/>
                <p>I haven't had the opportunitiy to land a technicall job yet. In the meantime, I'm just doing projects that sound interesting to me using MERN stack. I play basketball, watch anime, learn new tech stuffs in my free time. </p>
                <br/>
                
                <div className="listOfToolsIuse">
                  <table>
                    <tbody>
                    <tr>
                      <td colSpan="2"><p>Here are some of the tools I frequently use : </p></td>
                    </tr>
                    <tr>
                      <td><p><img src="images/play.png" className="playImage" alt="playimage"/> Node.js</p></td>
                      <td><p><img src="images/play.png" className="playImage" alt="playimage"/> React.js</p></td>
                    </tr>
                    <tr>
                    <td><p><img src="images/play.png" className="playImage" alt="playimage"/> MongoDB</p></td>
                      <td><p><img src="images/play.png" className="playImage" alt="playimage"/> Python</p></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="aboutMePic col-lg-6">
              <img src="images/image0.jpeg"  className="myPic img-fluid" alt="myPicture"/>
              </div>
            </div>
            
          </div>
    );
}

export default AboutMe;