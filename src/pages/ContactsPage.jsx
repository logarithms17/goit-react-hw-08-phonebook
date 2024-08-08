import React, { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import {
  getFilter,
  getIsLoading,
  getVisibleContacts,
  getError,
} from '../redux/selectors';

function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addInfo = newInfo => {
    dispatch(addContact(newInfo));
  };

  const deleteInfo = id => {
    dispatch(deleteContact(id));
  };

  const updateFilter = filterValue => {
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <ContactForm addInfo={addInfo} contacts={contacts} />
      <Filter filter={filter} updateFilter={updateFilter} />
      {isLoading && <b>Loading...</b>}
      {error && <b>Error: {error}</b>}
      {contacts && <ContactList deleteInfo={deleteInfo} />}
    </div>
  );
}

export default ContactsPage;
