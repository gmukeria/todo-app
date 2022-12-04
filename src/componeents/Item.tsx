import React from "react";

import classes from "./Item.module.css";

import deleteSvg from "../assets/delete.svg";
import checkSvg from "../assets/check.svg";
import emptyCheckSvg from "../assets/empty-check.svg";

export interface TaskItem {
  data: {
    key: string;
    title: string;
    time: string;
    isActive: boolean;
  };
  onDelete: (e: any) => any;
  onCheck: (e: any) => any;
}

const Item = ({ data, onDelete, onCheck }: TaskItem) => {
  return (
    <div
      className={`${classes["list-item"]} 
      ${!data.isActive ? classes["done-item"] : ""}`}
      key={data.key}
    >
      <div className={classes["item-text"]}>
        <h5>{data.title}</h5>
        <h6>{data.time}</h6>
      </div>

      <div className={classes["edit-item"]}>
        <div className={classes["item-check"]}>
          <input
            type="checkbox"
            defaultChecked={!data.isActive}
            name="vehicle1"
            onChange={() => onCheck(data.key)}
          />
        </div>

        <div
          className={classes["remove-item"]}
          onClick={() => onDelete(data.key)}
        >
          <img src={deleteSvg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Item;
