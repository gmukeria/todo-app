import React from "react";

import classes from "./Card.module.css";
type Props = {
  children: JSX.Element[];
};

const Card = ({ children }: Props) => {
  return <div className={classes["card-container"]}>{children}</div>;
};

export default Card;
