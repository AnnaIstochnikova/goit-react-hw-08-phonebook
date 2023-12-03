import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectFilter,
  selectIsLoading,
  selectUsers,
} from 'redux/contacts/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import Loader from '../loader/loader';

export const ContactList = () => {
  const usersFromStore = useSelector(selectUsers);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const filteredUsers = usersFromStore.filter(user =>
    user.name.toUpperCase().includes(filter.toUpperCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <Loader />}
      {isLoading ||
        filteredUsers.map(contact => {
          const { name, number, id } = contact;
          return (
            <li key={id}>
              {name}: {number}
              <button
                className="button-delete"
                type="button"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  usersFromStore: PropTypes.object,
  filter: PropTypes.string,
  filteredUsers: PropTypes.object,
  dispatch: PropTypes.func,
};
