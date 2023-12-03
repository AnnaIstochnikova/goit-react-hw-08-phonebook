import { useDispatch } from 'react-redux';

import { addFilter } from 'redux/contacts/contactsSlice';
import { Filter } from 'components/filter/filter';
import { ContactForm } from 'components/contact-form/contactForm';
import { ContactList } from 'components/contact-list/contactList';

export const Contacts = () => {
  const dispatch = useDispatch();

  const findContact = event => {
    event.preventDefault();
    const search = event.target.value;
    dispatch(addFilter(search));
  };

  return (
    <>
      <ContactForm />
      <Filter filterFn={findContact} />
      <h2>Contacts</h2>
      <ContactList />
    </>
  );
};
