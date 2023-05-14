import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const inputFilter = useSelector(state => state.filter);

  const filteredContacts = () => {
    const normalizedFilter = inputFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const dispatch = useDispatch();

  const DeleteContactHandler = contactID => {
    dispatch(removeContact(contactID));
  };

  return (
    <div className={css.controls}>
      <ul>
        {filteredContacts().map(contact => (
          <li key={contact.id} className={css['contact-list-item']}>
            {contact.name} : {contact.number}
            <button
              type="button"
              className={css['btn-delete']}
              onClick={() => DeleteContactHandler(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
