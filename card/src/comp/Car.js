import React from "react";
import contacts from "./contacts";
export default function Car(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <div className="card-details">
        <strong>{props.name}</strong>
        <p>
          <span>Phone: {props.phone}</span>
        </p>
        <p>
          <span>Email: {props.email}</span>
        </p>
        <p>
          <span>Company: {props.company}</span>
        </p>
      </div>
    </div>
  );
}
