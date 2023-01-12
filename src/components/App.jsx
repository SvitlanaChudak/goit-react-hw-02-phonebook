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
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm'

export class App extends Component {

state = {
    contacts: [],
    filter: '',
    }
    
    formSubmit = data => {
    console.log(data)
}

    render() {
        return (
            <>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={ this.formSubmit } />
                <h2>Contacts</h2>
                <label>Find contacts by name</label>
                <input type="text" />
                <ul></ul>
            </>
    )
}

}
