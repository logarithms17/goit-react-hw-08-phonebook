// import PropTypes from 'prop-types';

// import ContactListItem from 'components/ContactListItem/ContactListItem';

// function ContactList({ deleteInfo, filterContact }) {
//   const filteredContacts = filterContact();

//   return (
//     <ul>
//       {filteredContacts.map(filteredContact => (
//         <ContactListItem
//           key={filteredContact.id}
//           filteredContact={filteredContact}
//           deleteInfo={deleteInfo}
//         />
//       ))}
//     </ul>
//   );
// }

// export default ContactList;

// ContactList.propTypes = {
//   deleteInfo: PropTypes.func.isRequired,
//   filterContact: PropTypes.func.isRequired,
// };

import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors';

function ContactList({ deleteInfo }) {
  const filteredContacts = useSelector(getVisibleContacts); // Use the selector

  return (
    <ul>
      {filteredContacts.map(filteredContact => (
        <ContactListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
          deleteInfo={deleteInfo}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  deleteInfo: PropTypes.func.isRequired,
};

export default ContactList;