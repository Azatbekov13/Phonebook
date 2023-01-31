import React from "react";

const ContactsItem = ({ name, number, onDeleteTodo, id }) => {
  return (
    <li>
      <p>
        {name}: {number}
        <button onClick={() => onDeleteTodo(id)}>delete</button>
      </p>
    </li>
  );
};

export default ContactsItem;
