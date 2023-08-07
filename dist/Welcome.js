import React, { useState } from "react";
import styles from "./Welcome.module.css";
// import loginPic from "../../img/loginPic.png";
import { Button, Divider, Form, Input } from "antd";

// import ResetPasswordScreen from "./ResetPasswordScreen";

const Welcome = ({ loginPic, onFinish }) => {
  const [form] = Form.useForm();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [screen, setScreen] = useState(1);
  const [passwordLength, setPasswordLength] = useState(false);
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: styles.container,
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: styles.contentBox,
      },
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "space-between",
          },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          null,
          /*#__PURE__*/ React.createElement(
            "h3",
            {
              className: styles.welcomeTitle,
            },
            "Welcome to Eden Care Medical"
          ),
          /*#__PURE__*/ React.createElement(
            "p",
            {
              className: styles.welcomeText,
            },
            "Please log in to your account using the credentials that you received via email."
          )
        ),
        /*#__PURE__*/ React.createElement("img", {
          src: loginPic,
          alt: "",
          className: styles.loginPic,
        })
      ),
      /*#__PURE__*/ React.createElement(Divider, {
        style: {
          margin: 0,
        },
      }),
      /*#__PURE__*/ React.createElement(
        "div",
        {
          style: {
            display: "flex",
            justifyContent: "center",
          },
        },
        /*#__PURE__*/ React.createElement(
          "div",
          {
            className: styles.loginBox,
          },
          /*#__PURE__*/ React.createElement(
            Form,
            {
              form: form,
              className: "wFull",
              style: {
                padding: "0px 30px",
              },
              name: "basic",
              onFinish: onFinish,
            },
            /*#__PURE__*/ React.createElement(
              "p",
              {
                className: styles.fieldLabel,
              },
              "Email"
            ),
            /*#__PURE__*/ React.createElement(
              Form.Item,
              {
                name: "email",
                rules: [
                  {
                    required: true,
                    message: "A valid email is required",
                  },
                ],
              },
              /*#__PURE__*/ React.createElement(Input, {
                placeholder: "Enter your Email",
                className: "customAntInput",
                size: "large",
              })
            ),
            /*#__PURE__*/ React.createElement(
              "p",
              {
                className: styles.fieldLabel,
              },
              "Password"
            ),
            /*#__PURE__*/ React.createElement(
              Form.Item,
              {
                className: "mbZero",
                name: "password",
                rules: [
                  {
                    required: true,
                    message: "Password required for authentication",
                  },
                ],
              },
              /*#__PURE__*/ React.createElement(Input.Password, {
                placeholder: "Enter your Password",
                className: "customAntInput",
                size: "large",
              })
            )
          ),
          passwordLength &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  color: "red",
                  marginTop: -20,
                  marginBottom: -10,
                },
              },
              "Minimum 6 characters required"
            ),
          error &&
            /*#__PURE__*/ React.createElement(
              "span",
              {
                style: {
                  color: "red",
                  marginTop: -20,
                  marginBottom: -10,
                  width: "70%",
                },
              },
              error
            ),
          /*#__PURE__*/ React.createElement(
            "div",
            {
              className: styles.submitBtn,
            },
            /*#__PURE__*/ React.createElement(
              Button,
              {
                loading: loading,
                onClick: () => form.submit(),
                shape: "round",
                style: {
                  width: "65%",
                  backgroundColor: "#3ab44d",
                  color: "white",
                },
                size: "large",
                type: "text",
                htmlType: "submit",
              },
              "Login"
            )
          )
        )
      )
    )
  );
};
export { Welcome };
