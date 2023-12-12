import React, { useContext } from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const primaryColor = "#f3f3f3";


const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error =>{
      console.error(error)
    })
  }
  return (
    <Container>
      <div className="text-center mt-4 mb-4">
        <img src={logo} alt="" />
        <p className="mt-2">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div
        className="d-flex border rounded p-1"
        style={{ backgroundColor: primaryColor }}
      >
        <Button variant="danger">Latest</Button>{" "}
        <Marquee speed={100} className="text-danger">
          IMatch Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="d-flex justify-content-between" id="responsive-navbar-nav">
            <Nav>
                <Link className="me-3 text-black text-decoration-none" to={`/`}>Home</Link>
                <Link className="me-3 text-black text-decoration-none" to={`/`}>About</Link>
                <Link className="me-3 text-black text-decoration-none" to={`/`}>Carrer</Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#deets">
                {
                  user ? 
                  <div>
                    <UserCircleIcon className="w-25" />
                    <Button onClick={handleOut} variant="dark">Sign Out</Button>
                  </div> 
                  : <Link to='http://localhost:5173/login'><Button variant="dark">Login</Button></Link>
                }
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
                <Button variant="dark">Login</Button>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
