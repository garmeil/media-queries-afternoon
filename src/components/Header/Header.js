import React from "react";

function Header() {
  const conslog = param => console.log(param);
  function functionThis() {
    console.log(this);
  }
  return (
    <nav className="App-nav">
      <h1>Start Boostrap</h1>

      <ul className="topnav" id="myTopnav">
        <div className="ps">
          <li className="Nav-Item">
            <a className="Nav-Link" href="#services">
              SERVICES
            </a>
          </li>
          <li className="Nav-Item">
            <a className="Nav-Link" href="#portfolio">
              PORTFOLIO
            </a>
          </li>
          <li className="Nav-Item">
            <a className="Nav-Link" href="#about">
              ABOUT
            </a>
          </li>
          <li className="Nav-Item">
            <a className="Nav-Link" href="#team">
              TEAM
            </a>
          </li>
          <li className="Nav-Item">
            <a className="Nav-Link" href="#contact">
              CONTACT
            </a>
          </li>
        </div>
        <li className="Nav-Item">
          <a
            className="Nav-Link Icon"
            onClick={() => {
              var item = document.getElementById("myTopnav");
              console.log(1, item);
              if (item.className === "topnav") {
                item.className += " responsive";
                console.log(2, item);
              } else {
                item.className = "topnav";
                console.log(3, item);
              }
            }}
          >
            MENU&#9776;
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
