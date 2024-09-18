import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.ul}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.li}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContacts={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
