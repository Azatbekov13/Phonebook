import React, { Component } from "react";
import Form from "./components/Form/Form";
import shortid from "shortid";
import Contacts from "./components/Contacts";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    filter: "",
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== todoId),
    }));
  };

  addContacts = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      const alreadyInContacts = contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      );

      if (alreadyInContacts) {
        alert("This contact already exists");
        return { contacts };
      }
      return { contacts: [...contacts, newContact] };
    });
  };

  input;

  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const { changeFilter, addContacts } = this;
    const filtredContacts = contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
      );
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={addContacts} />
        <Contacts contacts={filtredContacts} onDeleteTodo={this.deleteTodo} />
        <h2>Contacts</h2>
        <input type="text" value={filter} onChange={changeFilter} />
      </div>
    );
  }
}
