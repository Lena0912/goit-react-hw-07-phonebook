import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { MdDeleteForever } from 'react-icons/md';
import { List, ContactItem, User, DeleteContact } from "./ContactList.styled";


export const ContactList = () => {

  const visibleContacts = useSelector(selectVisibleContacts);
   
  const dispatch = useDispatch();
  return (
<List>
      {visibleContacts.map(user => (
        <ContactItem key={user.id}>
          <User>
            {user.name}: {user.number}
          </User>
          <DeleteContact
            type="button"
            onClick={() => dispatch(deleteContact(user.id))}
          >
            <MdDeleteForever size={'24px'} />
          </DeleteContact>
        </ContactItem>
      ))}
    </List>
  );
};
  

    