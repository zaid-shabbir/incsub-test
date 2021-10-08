import React, { useState } from "react";
import "./SignupForm.scss";
import eyeIcon from "../assets/eye-icon.svg";
import eyeOff from "../assets/eye-off.svg";
import chevronDown from "../assets/chevron-down.svg";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const passwordIcon = isPassword ? eyeIcon : eyeOff;
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });

  const toggleShowPassword = () => {
    if (isPassword) document.getElementById("password").type = "text";
    else document.getElementById("password").type = "password";
    setIsPassword(!isPassword);
  };

  const updateName = (event) => {
    setName(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const updateRole = (event) => {
    setRole(event.target.value);
  };

  const validateName = () => {
    let nameError = "";

    if (!name) {
      nameError = "Name field is required";
    }

    setErrors({
      nameError: nameError,
      emailError: errors.emailError,
      passwordError: errors.passwordError,
    });
  };

  const validateEmail = () => {
    let emailError = "";

    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || reg.test(email) === false) {
      emailError = "Please enter a valid email address";
    }

    setErrors({
      nameError: errors.nameError,
      emailError: emailError,
      passwordError: errors.passwordError,
    });
  };

  const validatePassword = () => {
    let passwordError = "";

    if (!password) {
      passwordError = "Password field is required";
    } else if (password.length < 8) {
      passwordError = "Password should contain minimum 8 characters";
    }

    setErrors({
      nameError: errors.nameError,
      emailError: errors.emailError,
      passwordError: passwordError,
    });
  };

  const isFormValid = () => {
    if (
      name &&
      email &&
      password &&
      !errors.nameError &&
      !errors.emailError &&
      !errors.passwordError
    ) {
      return true;
    }
    return false;
  };

  const signUp = () => {
    alert("Signed Up successfully");
  };

  return (
    <div className='signup-form'>
      <div className='signup-form__heading-text'>Let's set up your account</div>
      <div className='signup-form__normal-text'>
        Already have an account?{" "}
        <span className='signup-form__link-text'>Sign in</span>
      </div>
      <div className='signup-form__form'>
        <div className='signup-form__textfield'>
          <input
            id='name'
            placeholder=' '
            type='text'
            value={name}
            onInput={updateName}
            onBlur={validateName}
          />
          <label>Your Name</label>
        </div>
        {errors.nameError && (
          <span className='signup-form__textfield-error'>
            {errors.nameError}
          </span>
        )}
        <div className='signup-form__textfield'>
          <input
            id='email'
            placeholder=' '
            type='text'
            onInput={updateEmail}
            onBlur={validateEmail}
          />
          <label>Email Address</label>
        </div>
        {errors.emailError && (
          <span className='signup-form__textfield-error'>
            {errors.emailError}
          </span>
        )}
        <div className='signup-form__select'>
          <select required value={role} onChange={updateRole}>
            <option value='' disabled>
              I would describe my user type as
            </option>
            <option value='developer'>Devleoper</option>
            <option value='project_manager'>Project Manager</option>
            <option value='qa_engineer'>QA Engineer</option>
          </select>
          <img src={chevronDown} alt='' className='signup-form__select-icon' />
        </div>
        <div className='signup-form__textfield'>
          <input
            id='password'
            placeholder=' '
            type='password'
            onInput={updatePassword}
            onBlur={validatePassword}
          />
          <label>Password</label>
          <img
            onClick={toggleShowPassword}
            src={passwordIcon}
            alt=''
            className='signup-form__textfield-icon'
          />
        </div>
        {errors.passwordError && (
          <span className='signup-form__textfield-error'>
            {errors.passwordError}
          </span>
        )}
        <button
          className='signup-form__button'
          disabled={!isFormValid()}
          onClick={signUp}
        >
          Next
        </button>
        <div className='signup-form__TOS'>
          By clicking the "Next" button, you agree to creating a free account,
          and to <br />
          <span className='signup-form__link-text'>
            Terms of Service
          </span> and{" "}
          <span className='signup-form__link-text'>Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
