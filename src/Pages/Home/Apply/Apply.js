import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Apply.css";

const Apply = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState("");
// set all job
  const [job, setJob] = useState([]);
//   SearchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const searchid = searchParams.get("id") || "";
  let navigate = useNavigate();



//   fetch data
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


  const handlerOnBlurForFile = (e) => {
    const temp_file = e.target.files[0];

    formData.file= temp_file;
  };


  const handlerOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...formData};
    newData[field] = value;
    setFormData(newData);
  };
 
  const handleToSubmit = (e) => {
      console.log(formData);
    const regName = /^[a-z ,.'-]+$/i;
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regName.test(formData.name)) {
      setError("Invalid First Name Given.");
    }  else if (!regEmail.test(formData.email)) {
      setError("Invalid Email.");
    } else {

      setError("");
      handleShow()
    }
    e.preventDefault();
  };

  //   modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
    navigate("/success");
    // Success
  };
  const handleShow = () => setShow(true);



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
            
              <img
                src="http://res.cloudinary.com/dpcloudinary/image/upload/v1506186248/logo.png"
                alt=""
              />
           
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
                    name="coverLetter"
                    type="text"
                    className="input"
                    placeholder="Cover Letter Note"
                    required
                  />
                  <input
                    onChange={handlerOnBlurForFile}
              name="resume"
                    type="file"
                    className="input"
                    placeholder="Upload Resume"
                    required
                  />
                  <input type="submit" className="button" value="Preview" />
                </form>
                {error && <p style={{ color: "#fff" }}>{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Applying for {job[0]?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>Full Name : <span className="job-text">{formData?.name}</span></h3>
           <h3>Email : <span className="job-text">{formData?.email}</span></h3>
           <h3>Resume: <span className="job-text">{formData?.file?.name}</span></h3>
           <h3>Cover Letter Note: <span className="job-text">{formData?.coverLetter}</span></h3>
        </Modal.Body>
        <Modal.Footer>
          <Button className='search-button' onClick={handleClose}>
            Submit
          </Button>
         
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Apply;
