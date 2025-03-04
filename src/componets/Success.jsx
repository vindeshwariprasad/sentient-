import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JobHeader from './JobHeader';
import { useJob } from "../context/AppContext"; 
import { useParams } from 'react-router-dom';

const Success = () => {
  const { state } = useLocation(); // ✅ Receives form data
  const navigate = useNavigate();
  const { id: jobId } = useParams();
  const { jobDetails } = useJob();
  const job = jobDetails.find((job) => job.jobId === parseInt(jobId));

  return (
    <>
    <JobHeader job={job} />
    
    <div style={containerStyle}>
      <h2 style={headingStyle}>Successful</h2>
      <p style={subTextStyle}>Congratulations, your application has been sent</p>

      {/* Resume Preview */}
      <div style={resumeContainer}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" alt="PDF Icon" style={pdfIconStyle} />
        <div>
          <p>{state.resume?.name || 'Uploaded Resume'}</p>
        </div>
      </div>

      {/* Details Display */}
      <div style={detailsContainer}>
        <p>Name - <strong>{state.name}</strong></p>
        <p>Passout - <strong>{state.passoutYear}</strong></p>
        <p>College - <strong>{state.college}</strong></p>
        <p>Skill - <strong>{state.skills}</strong></p>
        <p>Months of Experience - <strong>{state.monthsOfExperience}</strong></p>
      </div>

      {/* Buttons */}
      <button style={buttonStyle} onClick={() => navigate(`/${job?.category}`)}>Find a Similar Job</button>
      <button style={homeButtonStyle} onClick={() => navigate('/')}>Back to Home</button>
    </div>
    </>
  );
};

const containerStyle = { padding: '20px', textAlign: 'center' };
const headingStyle = { fontSize: '24px', fontWeight: 'bold' };
const subTextStyle = { color: '#4B5563', marginBottom: '20px' };
const resumeContainer = { display: 'flex', alignItems: 'center', padding: '10px', background: '#f3f4f6', borderRadius: '8px', marginBottom: '20px' };
const pdfIconStyle = { width: '40px', marginRight: '10px' };
const detailsContainer = { background: '#EDE9FE', padding: '15px', borderRadius: '8px', textAlign: 'left' };
const buttonStyle = { backgroundColor: '#8B5CF6', color: 'white', padding: '12px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: '100%', marginBottom: '10px' };
const homeButtonStyle = { backgroundColor: '#312E81', color: 'white', padding: '12px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: '100%' };

export default Success;
