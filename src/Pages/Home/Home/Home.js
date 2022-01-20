import React from "react";
import { Col, Nav, Navbar, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";
import userImg from "../../../Images/user-demo.jpg";
import useAuth from "../../../hook/useAuth";

const Home = () => {
  const {SignOut,user}=useAuth();
 
  return (
    <div>
      <Row>
        <Col className="user-nav flex-column"  md={3} lg={2}>
          <div className="user-nav-header">
            <span>IT-JOB</span>
          </div>
          <div className="user-img-div">
          {user.photoURL ?  <img src={user?.photoURL} alt="" /> :  <img src={userImg} alt="" /> }
           
            {user.displayName ? <span> {user?.displayName} </span>: <span>const first = useRef(second); Name</span> }
           
          </div>
          <div className="text-start mt-4">
           
            <Nav.Link as={Link} to="/" className="dashbord">
              <i className="fas fa-tv dashbord-icon"></i> Dashbord
            </Nav.Link>
            <Nav.Link as={Link} to="/alljob" className="dashbord">
              <i className="fas fa-users dashbord-icon"></i> All JOB
            </Nav.Link>
           
            {
              user.email ? <Nav.Link className="dashbord" onClick={SignOut}><i className="fas fa-sign-out-alt dashbord-icon"></i> SignOut</Nav.Link> :
              <Nav.Link as={Link} to="/signin" className="dashbord"><i className="fas fa-sign-out-alt dashbord-icon"></i> Sign In</Nav.Link>
            }
           
          </div>
        </Col>
        <Col className="user-nav-row" xs={12} md={9} lg={10}>
          <Navbar collapseOnSelect expand="lg" className="navbar-div" >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <div className="nav-row-div">
              <Nav.Link as={Link} to="/" className="dashbord">
              <i className="fas fa-tv dashbord-icon"></i> Dashbord
            </Nav.Link>
            <Nav.Link as={Link} to="/alljob" className="dashbord">
              <i className="fas fa-users dashbord-icon"></i> All JOB
            </Nav.Link>
          
            {
              user.email ? <Nav.Link className="dashbord" onClick={SignOut}><i className="fas fa-sign-out-alt dashbord-icon"></i> SignOut</Nav.Link> :
              <Nav.Link as={Link} to="/signin" className="dashbord"><i className="fas fa-sign-out-alt dashbord-icon"></i> Sign In</Nav.Link>
            }
              </div>
              <Navbar.Text>
              <div className="user-img-row">
              {user.displayName ? <span> {user?.displayName} </span>: <span>User Name</span> }
              {user.photoURL ?  <img src={user?.photoURL} alt="" /> :  <img src={userImg} alt="" /> }
           
          </div>
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>

        
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
