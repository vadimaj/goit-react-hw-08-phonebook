import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelector, contactsOperations } from '../../../redux';
import css from './ContactList.module.css';
import deleteIcon from 'icons/delete-icon.svg';

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
    <div className={css['contacts-list']}>
      {contacts.length > 0 && (
        <ul>
          {filteredContacts().map(contact => (
            <div key={contact.id} className={css['contacts-wrapper']}>
              <li className={css['contact-list-item']}>
                {contact.name} : {contact.number}
              </li>
              <button
                type="button"
                className={css['btn-delete']}
                onClick={() => DeleteContactHandler(contact.id)}
                title="Delete"
              >
                <img
                  src={`${deleteIcon}`}
                  className={css.icon}
                  alt="delete button"
                  width={8}
                  height={8}
                />
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
