import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sec from './Sec';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import JobForm from "../src/components/form/RecruiterForm/JobPostForm"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />    
    <Sec />
    <Third />
    <Fourth />
    <Fifth />
    <JobForm />

  </React.StrictMode>
);

