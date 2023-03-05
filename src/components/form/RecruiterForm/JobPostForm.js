import React, { useState } from "react";
import './JobPostForm.css';
import {location} from '../Constraints/Arrays';
import { jobRole } from '../Constraints/Arrays';

import { primarySkills } from '../Constraints/Arrays';
import { secondarySkills } from '../Constraints/Arrays'
import { sector } from '../Constraints/Arrays';


function JobForm() {


    // const [tc, setTc] = useState(false)

    const [jobData, setJobData] = useState({
        jobRole: "",
        jobDescription: "",
        experience: "",
        primarySkills: "",
        secondarySkills: "",
        education: "",
        location: "",
        salary: ""   
    });
      
   
   

    function HandleEvent(event) {
       const {name , value} =event.target
        setJobData({...jobData, [name]: value})     
    }
    function submitEvent(e) {
        if(!jobData.jobRole ||!jobData.jobDescription ||!jobData.experience ||!jobData.secondarySkills ||!jobData. primarySkills ||!jobData.education) alert("Please fill all the fields'")
        else{
         console.log( jobData)
         e.preventDefault()
        }
    }

    function SaveJob() {
        let info = {...jobData}
    
    
        fetch("http://localhost:8000/job", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)
    
        }).then(response => response.json().then(data => console.log(data)))
    
    }
    return (
        <div className="Jobpost">

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <form onSubmit={submitEvent}>

                <h1>Post a Job</h1>

<option type="text" placeholder="enter  jobRole" value={jobData.jobRole} name="jobRole" onChange={HandleEvent}></option>
<select id="job-role" value={jobData.jobRole} name="jobRole" onChange={HandleEvent}>
{
        jobRole.map((item,index) =>
        <option key = {index}>{item}</option>
        )
    }
</select>
<br></br><br></br>
<input type="text" placeholder="enter  jobDescription" value={jobData.jobDescription} name="jobDescription" onChange={HandleEvent}></input>
<br></br>
<input type="number" placeholder="enter  experience" value={jobData.experience} name="experience" onChange={HandleEvent}></input>
<option type="text" placeholder="enter  primarySkills" value={jobData.primarySkills} name=" primarySkills" onChange={HandleEvent}></option>
<select id="pri-skill" value={jobData.primarySkills} name="primarySkills" onChange={HandleEvent}>
    {
        primarySkills.map((item,index) =>
        <option key = {index}>{item}</option>
        )
    }
</select>

<option type="text" placeholder="enter  secondarySkills" value={jobData.secondarySkills} name="secondarySkills" onChange={HandleEvent}></option>
<select id="sec-skill" value={jobData.secondarySkills} name="secondarySkills" onChange={HandleEvent}>
    {
        secondarySkills.map((item,index) =>
        <option key = {index}>{item}</option>
        )
    }
</select><br></br><br></br>
<input type="text" placeholder="enter  education" value={jobData.education} name="education" onChange={HandleEvent}></input>
<br></br>
<select id="select-loc" value={jobData.location} name = "location" onChange={HandleEvent}>
  { 
    location.map((item,index) => 
    <option key={index}>{item}</option>

     )                
  }
</select>
<br></br>
<br></br>
<br></br>
 <input type="text" placeholder="enter  salary" value={jobData.salary} name="salary" onChange={HandleEvent}></input><br></br><br></br>

 <br></br><br></br>
 <button id="btn" type="submit" onClick={SaveJob}>submit</button>
<br></br>
<br></br>

</form>
               
        </div>
    )
}

export default JobForm