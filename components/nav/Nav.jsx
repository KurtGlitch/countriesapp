import React from "react";
import styles from "./nav.module.css";
import {FaRegMoon} from "react-icons/fa"
import {BsSunFill} from 'react-icons/bs'



function Nav(props) {
  const nav = {
    backgroundColor:props.theme?'hsl(0, 0%, 98%)' :"hsl(209, 23%, 22%)",
    position:"sticky",
    top:"0",
  }
  return (
    <nav style={nav}>
      <div className={`${styles.navbarcontent} container`}>
        <h1 className="title">Where in the world?</h1>
        <div className={styles.toggleTheme} onClick={props.handleClick}>
          { props.theme? <FaRegMoon/> :<BsSunFill/>}
          <p>{props.theme?'Dark Mode':'Light Mode'}</p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
