import React, { useState } from "react";
import styles from "./Login.module.css";
import { Button, Form, Input } from "antd";
// import { Link, useNavigate } from 'react-router-dom';
// import loginPic from '../../img/loginPic.png';

const Login = ({
  onFinish,
  validateEmail,
  loginPic
}) => {
  //   const navigate = useNavigate();
  //   const [form] = Form.useForm();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [passwordLength, setPasswordLength] = useState(false);

  //   var refresh = window.localStorage.getItem('refresh');
  //   if (refresh === null) {
  //     localStorage.removeItem('x-auth-token');
  //     localStorage.clear('providerUser');
  //     window.location.reload();
  //     window.localStorage.setItem('refresh', '1');
  //   }

  return /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React.createElement("img", {
    src: loginPic,
    alt: "",
    className: styles.loginPic
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.box
  }, /*#__PURE__*/React.createElement("img", {
    src: "icons/logo.png",
    className: styles.logo
  }), /*#__PURE__*/React.createElement(Form, {
    form: form,
    className: "wFull",
    style: {
      padding: "0px 30px"
    },
    name: "basic",
    onFinish: onFinish
  }, /*#__PURE__*/React.createElement("p", {
    className: styles.fieldLabel
  }, "Email"), /*#__PURE__*/React.createElement(Form.Item, {
    name: "email",
    validateTrigger: "onSubmit",
    rules: [{
      required: true,
      message: "Please input your Email!"
    }, {
      validator: validateEmail
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Enter your Email",
    className: "customAntInput",
    size: "large"
  })), /*#__PURE__*/React.createElement("p", {
    className: styles.fieldLabel
  }, "Password"), /*#__PURE__*/React.createElement(Form.Item, {
    className: "mbZero",
    name: "password",
    rules: [{
      required: true,
      message: "Please input your password!"
    }]
  }, /*#__PURE__*/React.createElement(Input.Password, {
    placeholder: "Enter your Password",
    className: "customAntInput",
    size: "large"
  })), /*#__PURE__*/React.createElement(Link, {
    to: "/reset-password-request",
    className: styles.forgottPassword
  }, "Forgot Password")), passwordLength && /*#__PURE__*/React.createElement("span", {
    className: styles.errorText
  }, "Minimum 6 characters required"), error && /*#__PURE__*/React.createElement("span", {
    className: styles.errorText
  }, error), /*#__PURE__*/React.createElement("div", {
    className: styles.submitBtn
  }, /*#__PURE__*/React.createElement(Button, {
    loading: loading,
    onClick: () => form.submit(),
    shape: "round",
    style: {
      width: "85%",
      backgroundColor: "#3ab44d",
      color: "white"
    },
    size: "large",
    type: "text",
    htmlType: "submit"
  }, "Login"))));
};
export default Login;