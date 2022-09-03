import {Button, ButtonGroup} from 'react-bootstrap';
import jobInfo from '../jobsInfo';
import {React, useState} from "react";
function Jobs(){

  const [job ,setJob] = useState({
    role: "National Youth Service @ NITDA",
        period: "March 2022 - Present",
        workDesc1: "Studying algorithms and data structure to implement efficient algorithms",
        workDesc2: "Learning about API calls and how to connect different parts of an application to function as one.",
        workDesc3: "Modeling using UML class, sequence, and UseCase diagrams."
  });
  

    function ChangeJob(event){
      if (event.target.value === "NITDA"){
        setJob(jobInfo[0])
      }
      else {
        setJob(jobInfo[1])
      }   
    }

    return (
      
        <div className="jobsSection row">
            <div className="jobsHeaderDiv col-lg-12">
              <h1 className="jobsHeader heading"><span className="numbering">02.</span> Where I've worked</h1>
            </div>

            <div className="jobsDiv col-lg-12 row">
              <div className="jobsButtonDiv col-lg-4">
                <ButtonGroup className="buttonWrapper" vertical>
                  <Button  onClickCapture={ChangeJob} value="NITDA" name="NITDA" className=" col-lg-12 jobsButton" variant="outline-dark btn-lg">NITDA</Button>{' '}
                  <Button onClickCapture={ChangeJob} value="AUN" name= "AUN" className=" col-lg-12 jobsButton" variant="outline-dark btn-lg">AUN</Button>{' '}
                </ButtonGroup>
              </div>
              <div className="jobsDescDIv col-lg-8">
                <div className="jobsDesc">
                  <ul>
                    <li><h1>{job.role}</h1> <p>{job.period}</p></li>
                    <li><p>{job.workDesc1}</p></li>
                    <li><p>{job.workDesc2}</p></li>
                    <li><p>{job.workDesc3}</p></li>
                  </ul>
                </div>
              </div>
            </div>
            


          </div>
    );
}

export default Jobs;