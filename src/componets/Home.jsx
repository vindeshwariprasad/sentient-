import React from 'react'
import { useJob,useUser } from '../context/AppContext'
import Job from './Job'
import './Home.css'
import Usernavbar from './Usernavbar'
const Home = () => {
  const { jobDetails } = useJob();
  const {userDetails } = useUser();
  return (
    <div>
        <Usernavbar user={userDetails} />
    <div className="job-container">
        {
          jobDetails.map((job) => (
            <Job key={job.jobId} job={job} />
          ))
        }
    </div>
    </div>
    
  )
}

export default Home