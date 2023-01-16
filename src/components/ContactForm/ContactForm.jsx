import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Button, Input } from './ContactForm.styled';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

        inputChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value, });
    };

    inputSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    nameInputId = nanoid();

    render() {
        return (
            <Form onSubmit={this.inputSubmit}>
                    <label htmlFor={this.nameInputId}>Name</label>
                    <Input
                     type="text"
                     name="name"
                     id={this.nameInputId}
                     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                     required
                     value={this.state.name}
                     onChange={this.inputChange}
                />
                    <label>Number</label>
                    <Input
                     type="tel"
                     name="number"
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                     required
                     value={this.state.number}
                     onChange={this.inputChange}
/>
                    <Button type="submit">Add contact</Button>
                </Form>
        )
    }
}

export default ContactForm;