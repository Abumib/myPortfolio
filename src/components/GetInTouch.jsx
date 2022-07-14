import {Button} from 'react-bootstrap';
function GetInTouch(){
    return (
        <div className="getInTouchSection col-lg-12">
            <div className="">
              <h5 className="whatNextText heading"><span className="numbering">0.4</span> What's Next?</h5>
            </div>
            <div>
              <h1 className="getintouchText">
                Get In Touch
              </h1>
              <p className="getInTouchPara">
                Althou I'm not currently looking for new opportunities to explore, my inbox is always open. A message could open an opportunity.
              </p>
            </div>
            <div className="getInTouchButton">
            <Button variant="outline-dark btn-lg"><a href="mailto:abubakarchinade@gmail.com" target="_blank" rel="noopener noreferrer">Let's Talk</a></Button>{' '}
            </div>
          </div>
    );
}

export default GetInTouch;