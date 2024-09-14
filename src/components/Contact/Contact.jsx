import React from "react";
import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = ({ contacts }) => {
  return (
    <ul className={css.ul}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.li}>
            <div className={css.div}>
              <p className={css.element}>
                <BsFillPersonFill className={css.icon} />
                {name}
              </p>
              <p className={css.element}>
                <FaPhoneAlt />
                {number}
              </p>
            </div>
            <button className={css.button}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Contact;
