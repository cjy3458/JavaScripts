import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const onClick = () => {
    alert("회원가입이 완료되었습니다.");
    navigate("/");
  };
  return (
    <Wrapper2>
      <Title>회원가입</Title>
      <Inputs>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" type="password" />
        <Input placeholder="성함" />
        <Input placeholder="나이" />
      </Inputs>
      <Button onClick={onClick}>가입하기</Button>
    </Wrapper2>
  );
};

export default Signup;

const Button = styled.button`
  background-color: darkgrey;
  color: white;
  padding: 10px 20px 10px 20px;
  margin-top: 10%;
  border-radius: 5px;
`;

const Wrapper2 = styled.div`
  width: 100%;
  height: 200%;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 3px solid black;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  font-weight: 700;
  margin-left: 5%;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
`;

const Input = styled.input`
  & {
    font-size: 15px;
    color: #222222;
    width: 300px;
    border: none;
    border-bottom: solid #aaaaaa 1px;
    padding-bottom: 10px;
    padding-left: 10px;
    position: relative;
    background: none;
    z-index: 5;
    margin-bottom: 10%;
  }

  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    outline: none;
  }

  label {
    position: absolute;
    color: #aaa;
    left: 10px;
    font-size: 20px;
    bottom: 8px;
    transition: all 0.2s;
  }

  &:focus ~ label,
  &:valid ~ label {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }

  &:focus ~ span,
  &:valid ~ span {
    width: 100%;
  }
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-right: 10px;
`;
