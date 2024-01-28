import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';
import { List, Item } from './ContactList.styled';
import { getContacts, getFilter } from 'store/selector';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filtered = useSelector(getFilter);
  const dispatch = useDispatch();

  function getVisibleContacts() {
    const normalizedFilter = filtered.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  const filteredContacts = getVisibleContacts();
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name}:</span>
          <span>{number}</span>

          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};
