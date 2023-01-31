import React from "react";
import ContactsItem from "./ContactsItem";

const Contacts = ({ contacts, onDeleteTodo }) => {
  const contactElem = contacts.map((item) => (
    <ContactsItem key={item.id} {...item} onDeleteTodo={onDeleteTodo} />
  ));

  return <ul>{contactElem}</ul>;
};

export default Contacts;
