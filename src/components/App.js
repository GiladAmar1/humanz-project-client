import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import api from "../api/contacts";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
import { ContactsCrudContextProvider } from "../context/ContactsCrudContext";

function App() {
  // const updateContactHandler = async (contact) => {
  //   const response = await api.put(`/contacts/${contact.id}`, contact);
  //   const { id, name, email } = response.data;
  //   setContacts(
  //     contacts.map((contact) => {
  //       return contact.id === id ? { ...response.data } : contact;
  //     })
  //   );
  // };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/" exact element={<ContactList />} />
            <Route path="/add" element={<AddContact />} />

            <Route path="/edit" element={<EditContact />} />

            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
