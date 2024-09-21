import React, { useState } from "react";
import { regInputs } from "./input";
import FormInput from "./FormInput";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const regInputs = [
    {
      id: 1,
      name: "fullName",
      type: "type",
      placeholder: "Ogunmakin Sunday",
      errorMessage: "All fields are required",
      label: "Full Name:",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "type",
      placeholder: "Adewumi123",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username:",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "test@gmail.com",
      errorMessage: "It should be a valid email @ address",
      label: "Email:",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "*************",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character (@#$%&!)",
      label: "Password:",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^$*])[a-zA-Z0-9!@#%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "**************",
      errorMessage: "Password doesn't match",
      label: "Confirm Password:",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="container">
        <div className="reg">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {regInputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button type="submit">Register</button>
          </form>
          <p className="">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </section>
    </>
  );
}
