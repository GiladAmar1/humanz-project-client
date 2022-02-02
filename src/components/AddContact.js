import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ipAdress, setIp] = useState("");
  const { addContactHandler } = useContactsCrud();
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || id === "" || ipAdress === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler({ name, id, ipAdress, phone });
    setName("");
    setId("");
    setIp("");
    setPhone("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Id</label>
          <input
            type="text"
            name="id"
            placeholder="Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Ip</label>
          <input
            type="text"
            name="ipAdress"
            placeholder="Ip"
            value={ipAdress}
            onChange={(e) => setIp(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
