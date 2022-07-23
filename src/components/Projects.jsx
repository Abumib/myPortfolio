import {useState, useEffect} from "react";
import Axios from "axios";

function Projects(){
 
  const [projects, setProjects] = useState([]); //always give an initial state or else when you refresh the componenets will be rendered before the api call
  useEffect(()=>{
        Axios.get("https://abubakarlawwal-portfolio.herokuapp.com/", {
            
         })
         .then((response)=>{
            
            setProjects(response.data);
            
         })
         .catch((err)=>{
             alert(err);
         });

     }, []); 
     //ADDED a , and emtpy array so it won't call infinite number of times.
    return (
        <div>

<div className="projects col-lg-12">
            <div className="projectsHeadingDiv">
              <h1 className="projectsHeading heading"><span className="numbering">03.</span> What I have built.</h1>
            </div>
  
            <div className="projectContent">
  
              <div className="sportTrendProjectDiv row">
                <div className="projectimageDiv col-lg-6">
                  <img src="images/projectimage.png"  className="projectImg" alt="myPicture"/>
                </div>
                <div className="projectDesc col-lg-6">
                  <div className="featuredProject">
                    <p> Featured Project</p>
                  </div>
                  <div>
                    <h2 className="sportTrendtext"> SportTrend</h2>
                  </div>
                  <div className="sportTrendExplanation">
                    <p>Sport Trend is web app used to broadcast sport news and stats. You have tables showing team stats, lists showing rankings between athletes and much more. This project was supposed to be for the colleges to help increase the intensity, fun and a medium in which sport activities will be reported to students</p>
                  </div>
                  <div className="projectlinksDiv">
                    <ul>
                      <li className="projectlinks">Nodjs </li>
                      <li className="projectlinks">Embedded Javascript EJS</li>
                      <li className="projectlinks">MongoDB</li>
                      <li className="projectlinks">Bootstrap</li>
                    </ul>
                  </div>
                  <div>
                    <a href="github.com" target="_blank" rel="noopener noreferrer"> <img className="githubLogo" src="images/github.png" alt="github" /> </a> 
                  </div>
                  
                </div>
              </div>
                
          
            </div>
          </div>





<div className="OtherProjectsSection col-lg-12 ">
            <div className="otherProjectsHeadingDiv">
              <h1 className="otherProjectsHeading heading">
              Other Pet Projects.
              </h1>
            </div>

            <div className="projectCardsDiv row">

             {
               
               projects.map(projectItems => (
                 <div className="projectCards">
                    <div className="folderLogoDIv">
                      <a href={projectItems.link} target="_blank" rel="noopener noreferrer"> <img className="folderLogo" src="images/folder.png" alt="folderPicture" /></a>
                    </div>
                    <div className="cardText">
                      <h2>{projectItems.title}</h2>
                      <p> {projectItems.description}</p>
                    </div>
                    <div>
                      <ul className="cardUnorderedList">
                         {
                           projectItems.toolsUsed.map(items=>(
                             <li className="projectCardList">{items}</li>
                           )) 
                         }
                      </ul>
                    </div>
                 </div>
               ))
               
               }


               
              {/* <div className="projectCards">
                <div className="folderLogoDIv">
                  <a href="github.com"> <img className="folderLogo" src="images/folder.png" /></a>
                </div>
                <div className="cardText">
                  <h2>Drum Kit using Plain Javascript</h2>
                  <p> Describing the project. What it does, How I built it etc</p>
                </div>
                <div>
                  <ul className="cardUnorderedList">
                    <li className="projectCardList">Javascript</li>
                    <li className="projectCardList">HTML</li>
                    <li className="projectCardList">Javascript</li>
                    <li className="projectCardList">Javascript</li>
                    <li className="projectCardList">Javascript</li>
                    <li className="projectCardList">Javascript</li>
                    <li className="projectCardList">Javascript</li>
                    <li className="projectCardList">Javascript</li>
                    <li className="projectCardList">Javascript</li>
                    
                  </ul>
                </div>
              </div>

              <div className="projectCards">
                <div className="folderLogoDIv">
                  <a href="github.com"> <img className="folderLogo" src="images/folder.png" /></a>
                </div>
                <div className="cardText">
                  <h2>Drum Kit using Plain Javascript</h2>
                  <p> Describing the project. What it does, How I built it etc</p>
                </div>
                <div>
                  <ul className="cardUnorderedList">
                    <li className="projectCardList">Javascript</li>
                    <li className="projectCardList">HTML</li>
                    
                  </ul>
                </div>
              </div>

              <div className="projectCards">
                <div className="folderLogoDIv">
                  <a href="github.com"> <img className="folderLogo" src="images/folder.png" /></a>
                </div>
                <div className="cardText">
                  <h2>Drum Kit using Plain Javascript</h2>
                  <p> Describing the project. What it does, How I built it etc</p>
                </div>
                <div>
                  <ul className="cardUnorderedList">
                    <li className="projectCardList">Javascript</li>
                    <li className="projectCardList">HTML</li>
                    
                  </ul>
                </div>
              </div> */}
               

            </div>

            
            
          </div>
        </div>
        

          
    );
}

export default Projects;