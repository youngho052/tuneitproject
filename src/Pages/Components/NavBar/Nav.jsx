import React, { useState } from "react";
import styled from "styled-components";
import { MENU_CONT } from "./Data/Menu";
import { LANGUAGE } from "./Data/Language";

function Nav(props) {
  const [toggle, setToggle] = useState(true);

  const clickHandle = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <NavContainer>
      <H1>
        <span className="blind">tuneit</span>
      </H1>
      {/* <div id="topMenu"> */}
      <MenuBar>
        {/* <div className="gnb-wrap"> */}
        <ul className="gnb" id="menu">
          {MENU_CONT.map((item, index) => {
            return <li key={index}>{item.content}</li>;
          })}
        </ul>
        {/* </div> */}
      </MenuBar>
      {/* <div className="language-area" id="language"> */}
      <LanguageBar>
        <ul>
          {LANGUAGE.map((item, index) => {
            return (
              <li toggle={toggle} key={index} onClick={clickHandle}>
                {item.language}
              </li>
            );
          })}
        </ul>
      </LanguageBar>
      {/* </div> */}
      {/* </div> */}
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  padding: 50px;
  background-color: #252525;
`;

const H1 = styled.h1`
  color: #fff;
  font-size: 30px;
`;

const MenuBar = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    width: 480px;

    li {
      color: #999999;
      cursor: pointer;

      &:hover {
        color: #f36d1a;
      }
    }
  }
`;

const LanguageBar = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    width: 60px;

    li {
      color: ${(props) => (props.toggle === true ? "#fff" : "#999999")};
      cursor: pointer;
    }
  }
`;
