import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../context/AppContext';
import { useApplication } from '../context/AppContext';
import JobHeader from './JobHeader';
import { useJob } from "../context/AppContext"; 
import {useNavigate} from "react-router-dom"
const Apply = () => {
  const { id: jobId } = useParams();
  const navigate = useNavigate();
  const { userDetails } = useUser();
  const { jobDetails } = useJob();
  const { addApplication } = useApplication();
  const job = jobDetails.find((job) => job.jobId === parseInt(jobId));
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    passoutYear: '',
    college: '',
    skills: '',
    monthsOfExperience: '',
    resume: null,
    whyHireYou: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleNext = () => {
    if (!formData.name || !formData.passoutYear || !formData.college || !formData.skills || !formData.monthsOfExperience) {
      alert('Please fill all the fields before proceeding.');
      return;
    }
    setStep(2);
  };

  const handleSubmit = () => {
    if (!formData.resume || !formData.whyHireYou) {
      alert('Please upload a resume and fill the "Why should we hire you?" section.');
      return;
    }
    
    const applicationData = {
      userId: userDetails.id,
      jobId: parseInt(jobId, 10),
      ...formData
    };

    addApplication(applicationData);
    navigate(`/success/${job.jobId}`, { state: { ...formData } });
  };

  return (
    <>
    <JobHeader job={job} />
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Apply for Job</h2>
      {/* <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
        You are applying for the job with ID: <strong>{jobId}</strong>
      </p> */}
      {step === 1 ? (
        <div>
          <input type="text" name="name" placeholder="Your Name" required style={inputStyle} onChange={handleChange} />
          <input type="text" name="passoutYear" placeholder="Passout Year" required style={inputStyle} onChange={handleChange} />
          <input type="text" name="college" placeholder="College" required style={inputStyle} onChange={handleChange} />
          <input type="text" name="skills" placeholder="Skills" required style={inputStyle} onChange={handleChange} />
          <input type="text" name="monthsOfExperience" placeholder="Months of Experience" required style={inputStyle} onChange={handleChange} />
          <button type="button" style={nextButtonStyle} onClick={handleNext}>Next</button>
        </div>
      ) : (
        <div>
          <label>Upload CV</label>
          <input type="file" accept=".pdf" onChange={handleFileUpload} />
          <textarea name="whyHireYou" placeholder="Explain why you are the right person for this job" rows="4" required style={inputStyle} onChange={handleChange}></textarea>
          {/* <button type="button" style={submitButtonStyle} onClick={handleSubmit} disabled={!formData.resume || !formData.whyHireYou}>Submit</button> */}
          <button
  type="button"
  style={{
    backgroundColor: formData.resume && formData.whyHireYou ? '#00008B' : '#B0C4DE',
    color: 'white',
    padding: '12px 16px',
    borderRadius: '8px',
    border: 'none',
    cursor: formData.resume && formData.whyHireYou ? 'pointer' : 'not-allowed',
    opacity: formData.resume && formData.whyHireYou ? '1' : '0.7',
  }}
  onClick={handleSubmit}
  disabled={!formData.resume || !formData.whyHireYou}
>
  Submit
</button>
        </div>
      )}
    </div>
    </>
  );
};

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ccc',
  fontSize: '16px',
  display: 'block',
  width: '100%',
  marginBottom: '10px'
};

const nextButtonStyle = {
  backgroundColor: '#1E40AF',
  color: 'white',
  padding: '12px 16px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer'
};

const submitButtonStyle = {
  backgroundColor: '#1E40AF',
  color: 'white',
  padding: '12px 16px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  opacity: '0.7'
};

export default Apply;


