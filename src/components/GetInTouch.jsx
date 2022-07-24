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
              Have a question? Want to say hi? Want to be a friend? My inbox is always open. I'm also open for new opportunities. 
              </p>
            </div>
            <div className="getInTouchButton">
            <Button variant="outline-dark btn-lg" onClick={() => window.location = 'mailto:abubakarchinade@gmail.com'}>Let's Talk</Button>{' '}

            {/* <a href="mailto:abubakarchinade@gmail.com" target="_blank" rel="noopener noreferrer">Let's Talk</a> */}
            </div>
          </div>
    );
}

export default GetInTouch;