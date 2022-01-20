import React, { useEffect, useState } from 'react';
import useAuth from '../../../hook/useAuth';
import "./HomeDash.css";
const HomeDash = () => {
  const [totalCount, setTotalCount] = useState([]);
const {setAllJobs}=useAuth()
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Sejan157218/it-job-data/main/index.js")
      .then((res) => res.json())
      .then((data) => {
        setTotalCount(data);
        setAllJobs(data)
      });
  }, []);

    return (
        <div className="text-start mt-4 p-5 dashbord-div-card">
        <div className="dashbord-div">
          <span>Total Find Job</span>
          <br />
          <span>{totalCount?.length}</span>
       <div className="dashbord-div-img">
       <i class="fas fa-users dashbord-div-icon"/>
       </div>
        </div>
      </div>
    );
};

export default HomeDash;