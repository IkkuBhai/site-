import React, { useState } from "react";
import { primarySkills } from './Constraints-2/Array-2'
import { secondarySkills } from './Constraints-2/Array-2'
import { sector } from './Constraints-2/Array-2'

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Education Level",
    "Skillset",
    "Experience",   
  ];
}



function getStepContent(step) {

  const [val,setVal] = useState('')

  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="first-name"
            label="Degree"
            variant="outlined"
            placeholder="Degree"
            fullWidth
            margin="normal"
            name="Project"
          />
          
          <TextField
            id="last-name"
            label="Dicipline"
            variant="outlined"
            placeholder="Dicipline"
            fullWidth
            margin="normal"
            name="lastName"
          />

          <TextField
            id="last-name"
            label="Authority"
            variant="outlined"
            placeholder="Authority"
            fullWidth
            margin="normal"
            name="lastName"
          />

          <TextField
            id="nick-name"
            label="Year of Passout"
            variant="outlined"
            
            fullWidth
            margin="normal"
            name="nickName"
            type="date"
          />
        </>
      );

    case 1:
      return (
        <>
          <option
            fullWidth
            id="email"
            label="Primary Skills"
            variant="outlined"
            placeholder="Enter Your Primary skills"
            margin="normal"
            name="emailAddress"
          />


     
          <select value={val} onChange={e=>setVal(e.target.value)}>       
            {
              primarySkills.map(opt=><option>{opt}</option>)
            }
          </select>
      
<br></br>
<br></br>    
          <option

            id="phone-number"
            label="Secondary Skills"
            variant="outlined"
            placeholder="Enter Your Secondary skills"
            fullWidth
            margin="normal"
            name="phoneNumber"
          />
          <select value={val} onChange={e=>setVal(e.target.value)}>
            {
              secondarySkills.map(opt=><option>{opt}</option>)
            }
          </select>
          <br></br>
          <br></br>
        </>
      );
    case 2:
      return (
        <>
          <TextField
            id="address1"
            label="Years of Experience"
            variant="outlined"
            placeholder="Enter Years of Experience"
            fullWidth
            margin="normal"
            type="number"
            name="address1"
          />


          


          <TextField
            id="country"
            label="Organization"
            variant="outlined"
            placeholder="Enter Your Organization"
            fullWidth
            margin="normal"
            name="country"
          />
<br></br>
<br></br>
          <option
            id="address2"
            label="Sector"
            variant="outlined"
            placeholder="Enter your sector"
            fullWidth
            margin="normal"
            
            name="address2"
          />
          <select value={val} onChange={e=>setVal(e.target.value)} >
            {
              sector.map(opt=><option>{opt}</option>)
            }
          </select>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
      );
    
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
