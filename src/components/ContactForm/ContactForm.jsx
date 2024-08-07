import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

function ContactForm({ addInfo, contacts }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const { name, number } = state;

  const handleSubmit = e => {
    e.preventDefault();

    //---Validation if texts boxes dont have any value----->
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    //---Validation if the name given is already in the data----->
    const existingContact = contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (existingContact) {
      alert(`${name} is already on the list.`);

      setState(() => ({
        name: '',
        number: '',
      }));
      return;
    }

    addInfo({
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    });

    setState({ name: '', number: '' });
  };

  //Function that handles the change of the name state
  const handleNameChange = e => {
    const { value } = e.target;
    setState(prevState => {
      return { ...prevState, name: value };
    });
  };

  //Function that handles the change of the number state
  const handleNumberChange = e => {
    const { value } = e.target;
    setState(prevState => {
      return { ...prevState, number: value };
    });
  };
  return (
    //use onSubmit when submitting a form
    <div className={css.contactFormContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Name</p>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" //regex for letters, apostrophe, dash and spaces
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
          />
        </label>

        <label htmlFor="number">
          <p>Number</p>
          <input
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}" //regex for numbers, spaces, dashes, parentheses and can start with +
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNumberChange}
          />
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  addInfo: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
