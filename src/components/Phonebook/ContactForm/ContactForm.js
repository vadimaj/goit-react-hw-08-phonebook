import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { contactsSelector, contactsOperations } from '../../../redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelector.getContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const {
      currentTarget: { name, value },
    } = e;

    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.some(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(name + ' is already in contacts');
    }
    const newContact = {
      name: name,
      number: number,
    };

    dispatch(contactsOperations.addContact(newContact));

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css['contact-container']}>
      <form className={css['contact-form']} onSubmit={handleSubmit}>
        <h2 className={css['contact-title']}>Add new contact</h2>
        <div className={css['contact-form-wrap']}>
          <input
            type="text"
            name="name"
            className={css['form-input']}
            value={name}
            placeholder="Enter contact name"
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <input
            type="tel"
            name="number"
            className={css['form-input']}
            value={number}
            onChange={handleInputChange}
            placeholder="Enter contact phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={css['contact-btn']}>
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
