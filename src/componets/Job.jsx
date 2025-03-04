import React from 'react'
import { useNavigate } from 'react-router-dom';
const JobCard = ({ job }) => {
    const navigate = useNavigate();

    const handleApplyClick = () => {
        navigate(`/details/${job.jobId}`);
    };
    return (
      <div style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '24px', width: '350px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', backgroundColor: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
            <img src={job.companyLogo} alt={job.companyName} style={{ width: '32px', height: '32px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600' }}>{job.jobName}</h3>
            <p style={{ color: '#6B7280' }}>{job.companyName} · {job.location}</p>
          </div>
          <span style={{ color: '#9CA3AF', cursor: 'pointer' }}>🔖</span>
        </div>
        <p style={{ fontSize: '20px', fontWeight: '600' }}>
          <span style={{ color: 'black' }}>{job.monthlySalary}</span><span style={{ color: '#9CA3AF' }}>/Mo</span>
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span style={{ backgroundColor: '#F3F4F6', color: '#6B7280', padding: '4px 16px', borderRadius: '8px', fontSize: '14px' }}>{job.designation}</span>
          <span style={{ backgroundColor: '#F3F4F6', color: '#6B7280', padding: '4px 16px', borderRadius: '8px', fontSize: '14px' }}>{job.roleType}</span>
        </div>
        <button style={{ backgroundColor: '#FBCFE8', color: 'black', padding: '8px 24px', borderRadius: '8px', alignSelf: 'start', border: 'none', cursor: 'pointer' }} onClick={handleApplyClick}>Apply</button>
      </div>
    );
  };
  
  export default JobCard;
  
