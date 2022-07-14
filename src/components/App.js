import React from "react";
import Navheader from "./Navheader";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";
import Projects from "./Projects";
import Jobs from "./Jobs";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import {Button,Card, ButtonGroup} from 'react-bootstrap';

// import {useState, useEffect} from "react";
// import ThemeProvider from 'react-bootstrap/ThemeProvider'
// import Axios from "axios";
// import Label from "./Label";


function  App(){

    // const [fname, setfName] = useState("");
    // const [lname, setlName] = useState("");
    // const [names, setNames] = useState([]);

    // The function that will send our request to our backend.
    //  const addFriend = ()=>{
    //    Axios.post("http://localhost:3001/", {
    //        backendfname: fname, 
    //        backendlname:lname
    //     })
    //     .then(()=>{
    //         alert("Yay it worked");
    //     })
    //     .catch(()=>{
    //         alert("Something went wrong");
    //     });
    //  }

     //useEffect runs the function the moment you load your page.
    //  useEffect(()=>{
    //     Axios.get("http://localhost:3001/", {
            
    //      })
    //      .then((response)=>{
            
    //         setNames(response.data);
            
    //      })
    //      .catch((err)=>{
    //          alert(err);
    //      });

    //  }, []); 
     //ADDED a , and emtpy array so it won't call infinite number of times.


  return(
        
    <div className="container-fluid">
      <div className="row landingPage">

        <div className="container-fuid navbarDiv col-lg-12">
          <Navheader/>
        </div>  
          
          
          <section id="intro">
            <Intro/>
          </section>


          <section id="aboutMe">
            <AboutMe/>
          </section>
          

          

          <section id="jobs">
            <Jobs/>
          </section>

          
          

          <section id="projects">
            <Projects/>
          </section>
          


          <section id="getInTouch">
            <GetInTouch/>
          </section>
          

          <section id="footer">
            <Footer/>
          </section>
          


      </div>
    </div>
    
    )
}

export default App;