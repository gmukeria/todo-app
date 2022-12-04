import React from "react";
import classes from "./Header.module.css";
import headerImg from "../assets/header.png";

export interface date {
  time: string;
}

const Header = ({ time }: date) => {
  return (
    <div className={classes["header-container"]}>
      <img src={headerImg} alt="" />
      <div className={classes["header-date"]}>
        <div className={classes["day"]}>Thur 9</div>
        <div className={classes["time"]}>{time}</div>
      </div>
    </div>
  );
};

export default Header;
