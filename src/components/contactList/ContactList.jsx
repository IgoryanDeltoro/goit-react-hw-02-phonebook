import PropTypes from 'prop-types';

const ContactList = ({ contacts, filter, remove }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        const lowerCase = name.toLowerCase();
        if (lowerCase.includes(filter)) {
          return (
            <li key={id}>
              <p>{name}</p>
              <span>{number}</span>
              <button onClick={() => remove(id)}>Delete</button>
            </li>
          );
        }
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};
export default ContactList;
