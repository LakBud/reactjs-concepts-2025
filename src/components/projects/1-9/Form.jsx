import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailUserColor, setEmailUserColor] = useState("");
  const [passwordUserColor, setPasswordUserColor] = useState("");
  const [confirmPasswordUserColor, setConfirmPasswordUserColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be at least 8 characters long");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailUserColor("green");
    } else {
      setEmailUserColor("red");
      setErrorEmail("Email should have @gmail");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordUserColor("green");
    } else {
      setErrorPassword("Password must be at least 8 characters long");
      setPasswordUserColor("red");
    }

    if (password !== "" && confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordUserColor("green");
    } else {
      setErrorConfirmPassword("Confirm Password is required");
      setConfirmPasswordUserColor("red");
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-image">
          <form>
            <input
              type="text"
              placeholder="Name"
              style={{ borderColor: userColor }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="error">{errorUserName}</p>
            <input
              type="email"
              placeholder="Email"
              style={{ borderColor: emailUserColor }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">{errorEmail}</p>
            <input
              type="password"
              placeholder="Password"
              style={{ borderColor: passwordUserColor }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{errorPassword}</p>
            <input
              type="password"
              placeholder="Confirm Password"
              style={{ borderColor: confirmPasswordUserColor }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="error">{errorConfirmPassword}</p>

            <button className="submit-btn" onClick={validate}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
