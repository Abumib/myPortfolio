import {Button,Card, ButtonGroup} from 'react-bootstrap';
function Intro(){
    return (
        <div className="intro row col-lg-12">
              <div className="intro-heading col-lg-12">
                <h3 className="greeting">Hello, my name is</h3>
                <h1 className="myName">Abubakar Lawwal.</h1>
                <h1 className="myMiniverse">I love building on the web.</h1>
              </div>
              
              <div className="introParagraphDiv col-lg-12">
                <p className="introParagraph">B.sc in Software engineering. What do I do ? I design and build beautiful software. I'm currently trying
                things out and having fun with my projects</p>
              </div>
              <div className="introBtnDiv">
                <a href="docs/Resume.pdf" download>
                <Button variant="outline-dark btn-lg">Check Out My Resume</Button>{' '}
                </a>
              </div>
              
          </div>
    );
}

export default Intro;