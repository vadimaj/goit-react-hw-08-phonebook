import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts);

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const dispatch = useDispatch();

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handleNumberChange = e => {
    setNumber(e.currentTarget.value);
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
    dispatch(addContact({ id: nanoid(), name, number }));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css['contact-form']}>
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId} className={css.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id={nameInputId}
          className={css['form-input']}
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label} htmlFor={numberInputId}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          id={numberInputId}
          className={css['form-input']}
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
