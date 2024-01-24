// import { useState, useEffect } from 'react';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import Notiflix from 'notiflix';
// import { nanoid } from 'nanoid';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const App = () => {
//   const [filter, setFilter] = useState('');
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem('contacts')) ?? initialState;
//   });

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = newContact => {
//     const { name } = newContact;
//     if (
//       contacts.find(
//         newContact => newContact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
//     } else {
//       setContacts(prevContacts => [
//         ...prevContacts,
//         { id: nanoid(), ...newContact },
//       ]);
//     }
//   };

//   const visibleContacts = () => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };
//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={addContact} />
//       <h1>Contacts</h1>
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList contacts={visibleContacts()} onDelete={deleteContact} />
//     </div>
//   );
// };
