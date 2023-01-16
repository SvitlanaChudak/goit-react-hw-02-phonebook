import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {

state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
    
  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.find(input =>
      input.name.toLowerCase() === contact.name.toLowerCase()  || input.number === contact.number)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

    filterInput = event => {
    this.setState({ filter: event.target.value });
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

    render() {
       
        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmit} contacts={this.state.contacts}/>
                
                <h2>Contacts</h2>
                <Filter filter={this.state.filter} onChange={this.filterInput}/>
                <ContactList  contacts={this.findContact()} deleteContact={this.deleteContact}/>
            </Container>
    )
}

}
