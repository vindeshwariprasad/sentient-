
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const JobDescription = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Job Description</h3>
      <p style={{ color: '#4B5563', lineHeight: '1.6' }}>
        {isExpanded ? job.description : job.description.substring(0, 150) + '...'}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          backgroundColor: '#E0E7FF', color: '#1E40AF', padding: '8px 12px',
          borderRadius: '6px', border: 'none', marginTop: '10px', cursor: 'pointer'
        }}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>

      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '20px' }}>Requirements</h3>
      <ul style={{ color: '#4B5563', lineHeight: '1.8' }}>
        {job.requirements.map((req, index) => (
          <li key={index} style={{ listStyleType: 'disc', marginLeft: '20px' }}>{req}</li>
        ))}
      </ul>

      <button style={{
        backgroundColor: '#1E40AF', color: 'white', padding: '12px 16px',
        borderRadius: '8px', border: 'none', width: '100%', marginTop: '20px', cursor: 'pointer'
      }}
      onClick={() => navigate(`/apply/${job.jobId}`)}
      >APPLY NOW</button>
    </div>
  );
};

export default JobDescription;

