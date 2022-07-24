import React, { useState } from "react";
import styles from "./input.module.css";
import {AiOutlineSearch} from 'react-icons/ai'

function Input(props) {
  
    const bg = {
        display:"flex",
        alignItems:"center",
        borderRadius: "0.5rem",
        padding:"1rem 2rem",
        maxWidth: "500px",
        marginTop: "1rem",
        backgroundColor: props.theme ? "var(--colr-white)" : "var(--colr-darkblue)",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    }

  return (
    <div className="container">
      <div style={bg}>
        <AiOutlineSearch />
        <input
          className={styles.input}
          type="text"
          placeholder="Search for a country..."
          onChange={props.handleInput}
          name=""
        />
      </div>
    </div>
  );
}

export default Input;
