import Contact from "../Contact/Contact";

// eslint-disable-next-line react/prop-types
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <Contact contacts={contacts} deleteContacts={deleteContact} />
    </>
  );
};

export default ContactList;
