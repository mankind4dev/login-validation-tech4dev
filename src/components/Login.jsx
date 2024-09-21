import React, { useState } from "react";

import FormInput from "./FormInput";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const regInputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "test@gmail.com",
      errorMessage: "It should be a valid email @ address",
      label: "Email:",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "*************",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character (@#$%&!)",
      label: "Password:",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^$*])[a-zA-Z0-9!@#%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="container">
        <div className="reg">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>Enter your Email and password below to login into yur account</p>
            {regInputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <Link className="forgetPass">Forget password</Link>
            <button type="submit">Login</button>
          </form>
          <p className="">
            Don't have an account? <Link to="/register" className="regLink">Register</Link>
          </p>
        </div>
      </section>
    </>
  );
}
