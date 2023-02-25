import React from "react"
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

import { BookForm } from "./BookForm/BookForm";
import { ContactList } from "./ContactList/ContactList";
import { Wrapper } from "./BookForm/BookForm.style";
import { ContactListItem } from "./ContactList/ContactListItem";
import { Filter } from "./Filter/Filter";

export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: '',
  };
  
  addContact = newContact => {
    if (this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(newContact.name.toLowerCase()))) {
        window.alert(`${newContact.name} is already in contacts!`);
    } 
    else {
      this.setState(prevState => {return {contacts: [...prevState.contacts, newContact]}});
    }
  };

  deleteContact = (id) => {
    this.setState(prevState => {
      return {contacts: prevState.contacts.filter(contact => contact.id !== id)}
    });
  };

  changeFilter = evt => {
    this.setState({filter: evt.currentTarget.value});
  };

  getFilteredContacts =() =>{
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  render(){
    const filteredContacts = this.getFilteredContacts();

    return (
      <Layout>
      <GlobalStyle/>
        <h1>Phonebook</h1>
        <Wrapper>
          <BookForm onAddContact={this.addContact}/>
          <ContactList>
            <Filter 
              value={this.state.filter} 
              onChange={this.changeFilter}
            />
            <ContactListItem 
              contacts={filteredContacts} 
              onDelete={this.deleteContact}/>
          </ContactList>
        </Wrapper>
      </Layout>
    );
  }
};