import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "./ViewJob.css";

const ViewJob = () => {
    const [job, setJob] = useState([]);
    const {id }= useParams();
    
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Sejan157218/it-job-data/main/index.js")
          .then((res) => res.json())
          .then((data) => {
              const filterJob=data.filter(dt=>dt.id===id)
              setJob(filterJob)
          });
      }, [id]);

    return (
        <div className='text-start ms-4 mt-5'>
           <h3>Job Title : <span className="job-text">{job[0]?.title}</span></h3>
           <h3>Company : <span className="job-text">{job[0]?.Company}</span></h3>
           <h3>Shift: <span className="job-text">{job[0]?.shift}</span></h3>
           <h3>Vacancy : <span className="job-text">{job[0]?.vacancy}</span></h3>
           <h3>Salary : <span className="job-text">{job[0]?.salary}</span></h3>
           <h3>Description: <span className="job-text">{job[0]?.desc}</span></h3>

          <Link to={`/apply?id=${job[0]?.id}`}> <button className='search-button'>Apply</button></Link>
        </div>
    );
};

export default ViewJob;