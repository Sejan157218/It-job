
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./AllJob.css";

const SeeAllEmployee = () => {
  const [allJob, setAllJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    const matchedJob = allJob.filter(job => job.title.toLowerCase().includes(data?.title.toLowerCase()));
    console.log(matchedJob,data.title);
    setDisplayJob(matchedJob,data.title);
  };

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Sejan157218/it-job-data/main/index.js")
      .then((res) => res.json())
      .then((data) => {
        setAllJob(data);
        setDisplayJob(data)
       
      });
  }, []);


  return (
    <div>
   <form className="text-end" onSubmit={handleSubmit(onSubmit)}>
      <select className="search-input"  {...register("title")}>
        <option  value="Front End Developer">Front End Developer</option>
        <option value="React JS Developer">React JS Developer</option>
        <option value="Javascript Developer">Javascript Developer</option>
        <option value="Back End Developer">Back End Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="MERN Stack Developer">MERN Stack Developer</option>
      </select>
      <input  className="search-button" type="submit" value="Search" />
    </form>
      <Table striped bordered hover responsive className="table-custom">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company Name</th>
            <th>Shift</th>
            <th>Vacancy</th>
            <th>Salary</th>
            <th>See Details</th>
          </tr>
        </thead>
        <tbody>
          {displayJob.map((job) => (
            <tr key={job?.id} className="mb-2">
              <td>{job?.title}</td>
              <td>{job?.Company}</td>
              <td>{job?.shift}</td>
              <td>{job?.vacancy}</td>
              <td>{job?.salary}</td>
              <td>
               <Link to={`/${job?.id}`}>
               <button
                  className="delete-btn"
                
                >
                  <i className="fas fa-eye"></i>
                </button>
               </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SeeAllEmployee;
