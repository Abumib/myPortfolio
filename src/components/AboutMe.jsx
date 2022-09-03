function AboutMe(){
    return (
        <div className="aboutMeSection col-lg-12">
            <div className="aboutMeLogoDiv">
              <h1 className="aboutMeLogo align-baseline heading"><span className="numbering">01.</span> About Me</h1>
            </div>
            <div className="aboutMeContentDiv row">
              <div className="aboutMeText col-lg-6">
                <p>Hello! I'm Abubakar. I graduated with a bachelor's in software engineering from the American University of Nigeria. My interest in computer science started when I searched for the meaning of digital nomad.
Yeah!I know, the dream life of an 18-year-old. So I plunged into the world of computer science and loved it. With what I could do, I thought I was to become the next Mark Zuckerberg. I learned the hard way. And my dreams about being a digital nomad? ABANDONED. Just Kidding</p>
                <br/>
                <p> In the meantime, I'm just doing projects that sound interesting to me using the MERN stack most of the time. I play basketball, watch anime, and learn new tech stuff in my free time. </p>
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
              <img src="images/image1.jpg"  className="myPic img-fluid" alt="myPicture"/>
              </div>
            </div>
            
          </div>
    );
}

export default AboutMe;