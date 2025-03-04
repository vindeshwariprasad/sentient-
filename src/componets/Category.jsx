import React from 'react';
import { useParams } from 'react-router-dom';
import { useJob, useUser } from '../context/AppContext';
import Job from './Job';
import './Home.css';
import Usernavbar from './Usernavbar';
import { useNavigate } from 'react-router-dom';
const Category = () => {
    const navigate = useNavigate();
const { category } = useParams(); // ✅ Get category from URL
  const { jobDetails } = useJob();
  const { userDetails } = useUser();

  // Filter jobs based on category
  const filteredJobs = jobDetails.filter(job => job.category === category);
  return (
    <div>
        <Usernavbar user={userDetails} />
    <div className="job-container">
        {
          filteredJobs.map((job) => (
            <Job key={job.jobId} job={job} />
          ))
        }
    </div>
    <button style={homeButtonStyle} onClick={() => navigate('/')}>See All Jobs</button>
    </div>
  )
}
const homeButtonStyle = { backgroundColor: '#312E81', color: 'white', padding: '12px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', width: '100%' };

export default Category