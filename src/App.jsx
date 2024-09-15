import { useEffect, useState } from "react";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import data from "./components/contacts.json";

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const [users, setUsers] = useState(data);

  useEffect(() => {
    const handleFilter = data.filter((user) =>
      user.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setUsers(handleFilter);
  }, [inputValue]);

  console.log(users);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm values={initialValues} /> */}
        <SearchBox data={inputValue} setData={setInputValue} />

        <p>{inputValue}</p>
        <ContactList contacts={users} />
      </div>
    </>
  );
}

export default App;
