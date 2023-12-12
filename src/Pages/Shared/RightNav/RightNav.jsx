import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import QZone from "../Q-Zone/QZone";
import RightLavBG from '../../../assets/bg.png'
import { AuthContext } from "../../../providers/AuthProvider";


const RightNav = () => {
  const {signInGoogle} = useContext(AuthContext)
  const {signInGithub} = useContext(AuthContext)

  const handleSubmitG = () =>{
    signInGoogle()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(error => console.error(error))
  }

  const handleSubmitH = () =>{
    signInGithub()
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
    })
    .catch(error =>{
      console.error(error)
    })
  }



  return (
    <div>
      <div className="mb-4">
        <h4>Login With</h4>
        <Button onClick={handleSubmitG}
          variant="outline-primary"
          className="w-75 mb-2 d-flex align-items-center"
        >
          <FaGoogle className="m-2" />
          Login with Google
        </Button>
        <Button onClick={handleSubmitH}
          variant="outline-secondary"
          className="w-75 mb-2 d-flex align-items-center"
        >
          <FaGithub className="m-2" />
          Login with Github
        </Button>
      </div>
      <div className="mb-4">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item className="d-flex align-items-center"><FaFacebook className="m-2"/>Facebook</ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center"><FaTwitter  className="m-2"/>Twitter</ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center"><FaInstagram className="m-2"/>Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
      <div style={{
        backgroundImage: `url(${RightLavBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
      }}>
        <div className="text-white text-center p-5">
            <h4 className="mb-4">Create an Amazing Newspaper</h4>
            <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
