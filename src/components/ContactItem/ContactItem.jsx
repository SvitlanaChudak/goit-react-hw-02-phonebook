import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteContact }) => {
    return (
        <li key={id}>{name}: {number} <button type="button" onClick={() => deleteContact(id)}>Delete</button></li>
    )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}
