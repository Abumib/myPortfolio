import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
function Navheader(){
  return(
    <Navbar collapseOnSelect expand="lg" className="navbar"  variant="light" >
    <Container>
    <Navbar.Brand className="logo" href="#home">Abubakar</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#aboutMe">About</Nav.Link>
      <Nav.Link href="#jobs">Experience</Nav.Link>
      <Nav.Link href="#projects">Work</Nav.Link>
      <Nav.Link href="#footer">getInTouch</Nav.Link>
      <Nav.Link href="#pricing"><a href="docs/Resume.pdf" download><Button variant="outline-dark">Resume</Button>{' '}</a></Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>

    // <div class="container-fluid">
    //   {/* navbar */}
    //   <nav class="navbar navbar-static-top navbar-expand-lg navbar-light bg-light">
    //     {/* If you do not put navbar-static-top , your h1 would hide under it. */}
        
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul class="navbar-nav navbar-nav m-auto">
    //          {/* "navbar-nav ml-auto" is to move the items of the nav bar to the right  */}
    //         <li class="nav-item active">
    //           <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //         </li>
    //         <li class="nav-item active">
    //           <a class="nav-link" href="#skills">Skills</a>
    //         </li>
    //         <li class="nav-item active">
    //           <a class="nav-link" href="#contact-me">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  );
}
export default Navheader;