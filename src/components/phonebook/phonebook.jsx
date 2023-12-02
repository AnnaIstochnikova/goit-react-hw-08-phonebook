import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';

// import { Filter } from './filter/filter';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/usersSlice';
// import { ContactList } from './contact-list/contactList';
// import { ContactForm } from './contact-form/contactForm';
import { NotFound } from '../../pages/not-found/not-found';
import { Contacts } from 'pages/contacts/contacts';
import { Layout } from 'pages/layout/layout';
import { Register } from 'pages/register/register';
import { Login } from 'pages/login/login';
import { Home } from 'pages/home/home';

export const Phonebook = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

Phonebook.propTypes = {
  dispatch: PropTypes.func,
  deleteContact: PropTypes.func,
  findContact: PropTypes.func,
  h1: PropTypes.string,
  h2: PropTypes.string,
};
