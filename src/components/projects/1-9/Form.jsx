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

    if (username.length >= 8) {
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

    if (password.length >= 8) {
      setErrorPassword("");
      setPasswordUserColor("green");
    } else {
      setErrorPassword("Password must be at least 8 characters long");
      setPasswordUserColor("red");
    }

    if (password !== "" && confirmPassword === password) {
      setErrorConfirmPassword("");
      setConfirmPasswordUserColor("green");
    } else {
      setErrorConfirmPassword("Passwords must match");
      setConfirmPasswordUserColor("red");
    }
  };

  const getInputClass = (color) => {
    return `w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors duration-300 ${
      color === "green"
        ? "border-green-500 focus:ring-2 focus:ring-green-300"
        : color === "red"
        ? "border-red-500 focus:ring-2 focus:ring-red-300"
        : "border-gray-300 focus:ring-2 focus:ring-indigo-300"
    }`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5" onSubmit={validate}>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Register</h2>

        <div>
          <input
            type="text"
            placeholder="Username"
            className={getInputClass(userColor)}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errorUserName && <p className="text-red-500 text-sm mt-1">{errorUserName}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className={getInputClass(emailUserColor)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && <p className="text-red-500 text-sm mt-1">{errorEmail}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className={getInputClass(passwordUserColor)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorPassword && <p className="text-red-500 text-sm mt-1">{errorPassword}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            className={getInputClass(confirmPasswordUserColor)}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorConfirmPassword && <p className="text-red-500 text-sm mt-1">{errorConfirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
