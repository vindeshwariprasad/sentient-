import React from 'react';

const JobHeader = ({ job }) => {
  return (
    <div style={{
      padding: '20px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
    }}>
      <img src={job.companyLogo} alt={job.companyName} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '10px' }}>{job.jobName}</h2>
      <p style={{ color: '#374151' }}>{job.companyName} • {job.location} • 1 day ago</p>
    </div>
  );
};

export default JobHeader;
