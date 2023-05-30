import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './Phonebook.module.css';

const Phonebook = () => {
  return (
    <div className={css['phonebook-container']}>
      <ContactForm />
      <div className={css['contacts-wrap']}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Phonebook;
