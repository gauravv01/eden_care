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

  return (
    <div className={styles.container}>
      <div className={styles.contentBox}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <div>
            <h3 className={styles.welcomeTitle}>
              Welcome to Eden Care Medical
            </h3>
            <p className={styles.welcomeText}>
              Please log in to your account using the credentials that you
              received via email.
            </p>
          </div>
          <img src={loginPic} alt="" className={styles.loginPic} />
        </div>
        <Divider style={{ margin: 0 }} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.loginBox}>
            <Form
              form={form}
              className="wFull"
              style={{ padding: "0px 30px" }}
              name="basic"
              onFinish={onFinish}>
              <p className={styles.fieldLabel}>Email</p>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "A valid email is required",
                  },
                ]}>
                <Input
                  placeholder="Enter your Email"
                  className="customAntInput"
                  size="large"
                />
              </Form.Item>

              <p className={styles.fieldLabel}>Password</p>
              <Form.Item
                className="mbZero"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password required for authentication",
                  },
                ]}>
                <Input.Password
                  placeholder="Enter your Password"
                  className="customAntInput"
                  size="large"
                />
              </Form.Item>
            </Form>

            {passwordLength && (
              <span style={{ color: "red", marginTop: -20, marginBottom: -10 }}>
                Minimum 6 characters required
              </span>
            )}

            {error && (
              <span
                style={{
                  color: "red",
                  marginTop: -20,
                  marginBottom: -10,
                  width: "70%",
                }}>
                {error}
              </span>
            )}
            <div className={styles.submitBtn}>
              <Button
                loading={loading}
                onClick={() => form.submit()}
                shape="round"
                style={{
                  width: "65%",
                  backgroundColor: "#3ab44d",
                  color: "white",
                }}
                size="large"
                type="text"
                htmlType="submit">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
