// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

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
    
    formSubmit = contact => {
    this.setState(prevState => {
      return { contacts: [{ id: nanoid(), name: contact.name, number: contact.number }, ...prevState.contacts] };
    });
  };


    render() {
       
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmit} contacts={this.state.contacts}/>
                
                <h2>Contacts</h2>
                <Filter />
                <ContactList  contacts={this.state.contacts}/>
            </div>
    )
}

}
