import React from "react";
import styled from "styled-components";
import { MENU_CONT } from "./Data/Menu";
import { LANGUAGE } from "./Data/Language";

function Nav(props) {
  return (
    <NavContainer>
      {/* <div className="inner"> */}
      <h1>
        <span className="blind">tuneit</span>

        <span className="blind">tuneit</span>
      </h1>
      <button type="button" className="menu-open for-mobile">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 40 40"
        >
          <g id="Menu" transform="translate(-305 -94)">
            <path
              id="White"
              className="svg-menu"
              d="M315,122v-2h20v2H315z M315,115v-2h20v2H315z M315,108v-2h20v2H315z"
            />
          </g>
        </svg>
      </button>
      <div id="topMenu">
        <MenuBar>
          {/* <div className="gnb-wrap"> */}
          <ul className="gnb" id="menu">
            {MENU_CONT.map((item, index) => {
              return <li>{item.content}</li>;
            })}
          </ul>
          {/* </div> */}
        </MenuBar>
        <div className="language-area" id="language">
          <ul>
            {LANGUAGE.map((item, index) => {
              return <li>{item.language}</li>;
            })}
          </ul>
        </div>
      </div>
      {/* </div> */}
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  position: relative;
  height: 100%;
  text-align: center;
  margin: 0 auto;
`;

const MenuBar = styled.div`
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);

  .gnb {
    display: flex;
  }
`;
