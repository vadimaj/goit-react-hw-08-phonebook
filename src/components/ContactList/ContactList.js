import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector, contactsOperations } from '../../redux';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector.getContacts);

  const inputFilter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizedFilter = inputFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const DeleteContactHandler = contactId => {
    dispatch(contactsOperations.removeContact(contactId));
  };

  return (
    <div className={css.controls}>
      {contacts.length > 0 && (
        <ul>
          {filteredContacts().map(contact => (
            <li key={contact.id} className={css['contact-list-item']}>
              {contact.name} : {contact.phone}
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
      )}
    </div>
  );
};

export default ContactList;
