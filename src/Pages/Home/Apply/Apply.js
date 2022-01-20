import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Apply.css";

const Apply = () => {
  const [job, setJob] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchid = searchParams.get("id") || "";

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Sejan157218/it-job-data/main/index.js"
    )
      .then((res) => res.json())
      .then((data) => {
        const filterJob = data.filter((dt) => dt.id === searchid);
        setJob(filterJob);
      });
  }, [searchid]);

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({});

  const handlerOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...formData };
    newData[field] = value;
    setFormData(newData);
  };

  const handleToSubmit = (e) => {
    const regName = /^[a-z ,.'-]+$/i;
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regName.test(formData.firstname)) {
      setError("Invalid First Name Given.");
    } else if (!regName.test(formData.lastname)) {
      setError("Invalid Last Name Given..");
    } else if (!regEmail.test(formData.email)) {
      setError("Invalid Email.");
    } else {
      setError("");
    }
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="wrap">
        <div id="toggle-wrap">
          <div id="toggle-terms">
            <div id="cross"></div>
          </div>
        </div>

        <div className="content">
          <div className="logo">
            <a href="#">
              <img
                src="http://res.cloudinary.com/dpcloudinary/image/upload/v1506186248/logo.png"
                alt=""
              />
            </a>
          </div>

          <div id="slideshow">
            <div className="one">
              <h2>
                <span>Apply Job</span>
              </h2>
              <h1>{job[0]?.title}</h1>
            </div>
          </div>
        </div>

        <div className="user">
          <div className="form-wrap">
            <div className="tabs-content">
              <div id="login-tab-content" className="active">
                <form
                  onSubmit={handleToSubmit}
                  className="login-form"
                  action=""
                  method="post"
                >
                  <input
                    onChange={handlerOnBlur}
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Full Name"
                  />

                  <input
                    onChange={handlerOnBlur}
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    required
                  />

                  <textarea
                    onChange={handlerOnBlur}
                    name="cover-letter"
                    type="text"
                    className="input"
                    placeholder="Cover Letter Note"
                  />
                  <input
                    onChange={handlerOnBlur}
                    name="resume"
                    type="file"
                    className="input"
                    placeholder="Upload Resume"
                  />
                  <input type="submit" className="button" value="Submit" />
                </form>
                {error && <p style={{ color: "#fff" }}>{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
