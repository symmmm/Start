import { useState } from "react";
import "./member.css";
import { Row, Col } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const ID_Handle = (event) => {
    console.log(event.currentTarget.value);
    setID(event.currentTarget.value);
  };
  const Password_Handle = (event) => {
    console.log(event.currentTarget.value);
    setPassword(event.currentTarget.value);
  };
  const Login_Handle = () => {
    console.log(ID, password);
    axios
      .post("http://localhost:7000/member/login", {
        id: ID,
        pw: password,
      })
      .then((response) => {
        console.log(response);
      });
    //192.168.0.45:8001
  };
  return (
    <Row>
      <Col xs={24} md={8}></Col>
      <Col xs={24} md={6}>
        <div
          className="loginPage"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "90vh",
          }}
        >
          <div className="loginBox">
            <h2 style={{ textAlign: "center" }}>LOGIN</h2>
            <input
              className="loginWrap"
              type="text"
              placeholder="아이디"
              onChange={ID_Handle}
            ></input>
            <input
              className="loginWrap"
              type="password"
              placeholder="비밀번호"
              onChange={Password_Handle}
            ></input>
            <button className="loginButton" onClick={Login_Handle}>
              {" "}
              회원 로그인{" "}
            </button>
            <div className="logingArea">
              아이디찾기 ㅣ비밀번호찾기 ㅣ <Link to="/join">회원가입</Link>
            </div>
          </div>
        </div>
      </Col>
      <Col xs={24} md={8}></Col>
    </Row>
  );
};

export default LoginPage;
