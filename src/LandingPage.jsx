import React, { useState } from "react";
import { auth } from "../firebase";
import { Input, Button, Card, Typography } from "@material-tailwind/react";
import "./style.css"; // Ensure this import is present to include the styles
import logo from "./assets/logo.webp"; // Import the WebP logo image
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LandingPage = ({ setIsRegistered }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Successful");
      setIsRegistered(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful");
      setIsRegistered(true);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="FireFiles Logo" className="logo" />
      <div className="title">FireFiles</div>
      <Card className="card">
        <Typography variant="h4" className="heading">
          {isRegistering ? "Register" : "Login"}
        </Typography>
        <div className="email-container">
          <Input
            type="email"
            color="red"
            size="lg"
            outline={true}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-red-500"
          />
        </div>
        <div className="username-container">
          <Input
            type="text"
            color="red"
            size="lg"
            outline={true}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text-red-500"
          />
        </div>
        <div className="password-container">
          <Input
            type="password"
            color="red"
            size="lg"
            outline={true}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-red-500"
          />
        </div>
        <Button
          color="lightBlue"
          buttonType="filled"
          size="lg"
          block={true}
          ripple="light"
          onClick={isRegistering ? handleSignUp : handleSignIn}
        >
          {isRegistering ? "Register" : "Login"}
        </Button>
        <Button
          color="gray"
          buttonType="link"
          size="lg"
          block={true}
          ripple="dark"
          className="button"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Go to Login" : "Go to Register"}
        </Button>
      </Card>
    </div>
  );
};

export default LandingPage;
