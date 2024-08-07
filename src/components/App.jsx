import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
// import { addContact, deleteContact } from '../redux/contactSlice';
import { setFilter } from '../redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import {
  getFilter,
  getIsLoading,
  getVisibleContacts,
  getError,
} from '../redux/selectors';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  console.log(contacts);

  // Save contacts to local storage whenever contacts state changes
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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

  //get the array of the filtered data from filter
  // const filterContact = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   ); //using includes returns the data every changes

  //   // return contacts.filter(contact => contact.name.toLowerCase() === filter.toLowerCase()) {using this method only returns the data if the info is complete}
  // };

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

export default App;
