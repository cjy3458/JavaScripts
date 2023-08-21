import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header>우리의 서비스</Header>
      <Main>
        <div>{children}</div>
      </Main>
      <Footer>만든이: 오잉조</Footer>
    </Wrapper>
  );
};

export default Layout;

const Main = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 735px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  background-color: darkgrey;
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: darkgrey;
`;

/* # BAD
GET /getTodos/1
GET /todos/show/1

# GOOD
GET /todos/1

# BAD
GET /todos/delete/1

# GOOD
DELETE /todos/1
*/
