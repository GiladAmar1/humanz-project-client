import React from "react";
import { Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { removeContactHandler } = useContactsCrud();

  const deleteContact = (id) => {
    removeContactHandler(id);
  };

  const { id, name, phone, ipAdress } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="header">Full Name: {name}</div>
          <div>ID: {id}</div>
          <div>Phone: {phone}</div>
          <div>IP: {ipAdress}</div>
        </div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => deleteContact(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
