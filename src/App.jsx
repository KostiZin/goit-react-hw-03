import { useEffect, useState } from "react";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import data from "./components/contacts.json";
import { nanoid } from "nanoid";

function App() {
  //Search Box
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Contact List
  const [users, setUsers] = useState(data);

  useEffect(() => {
    const handleFilter = data.filter((user) =>
      user.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setUsers(handleFilter);
  }, [inputValue]);

  //Contact Form

  const initialValues = {
    id: "",
    number: "",
    name: "",
  };

  const handleSubmit = (values, options) => {
    values.id = nanoid();
    setUsers((prev) => [...prev, values]);
    options.resetForm();
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm value={initialValues} getValue={handleSubmit} />
        <SearchBox data={inputValue} setData={handleChange} />
        <ContactList contacts={users} />
      </div>
    </>
  );
}

export default App;
