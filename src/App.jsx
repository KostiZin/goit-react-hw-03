import { useState } from "react";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contacts from "./components/contacts.json";

function App() {
  const initialValues = {
    name: "Kostia",
    number: 876867,
  };
  console.log({ contacts });

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm values={initialValues} />
        <SearchBox />
        <ContactList contacts={contacts} />
      </div>
    </>
  );
}

export default App;
