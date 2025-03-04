import React from "react";
import { useParams } from "react-router-dom";
import { useJob } from "../context/AppContext"; 
import JobDescription from "./JobDescription";
import JobHeader from "./JobHeader";
const Details = () => {
  const { id } = useParams(); 
  const { jobDetails } = useJob();
  
  const job = jobDetails.find((job) => job.jobId === parseInt(id));

  if (!job) {
    return <h2 style={{ textAlign: "center", marginTop: "20px" }}>Job not found</h2>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px", fontFamily: "Arial" }}>
      <JobHeader job={job} />
      <JobDescription job={job} />
    </div>
  );
};

export default Details;
