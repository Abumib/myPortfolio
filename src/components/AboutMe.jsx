function AboutMe(){
    return (
        <div className="aboutMeSection col-lg-12">
            <div className="aboutMeLogoDiv">
              <h1 className="aboutMeLogo align-baseline heading"><span className="numbering">01.</span> About Me</h1>
            </div>
            <div className="aboutMeContentDiv row">
              <div className="aboutMeText col-lg-6">
                <p>Hello! My name is Abubakar Aminu Lawwal and I enjoy problem solving. I can't get used to the feeling of solving a puzzle, quiz etc. My interest in computer science was when I heard about digital nomad life style. I jumped into CS and here I am today starting my journey.</p>
                <br/>
                <p>I haven't had the opportunity to land a intership with a tech role but I have managed to learn one two with personal projects. With that was able to build this portfolio using the MERN stack. </p>
                <br/>
                
                <div className="listOfToolsIuse">
                  <table>
                    <tbody>
                    <tr>
                      <td colSpan="2"><p>Here are some of the tools I frequently use : </p></td>
                    </tr>
                    <tr>
                      <td><p>=\ Node.js</p></td>
                      <td><p>=\ React.js</p></td>
                    </tr>
                    <tr>
                    <td><p>=\ MongoDB</p></td>
                      <td><p>=\ Python</p></td>
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