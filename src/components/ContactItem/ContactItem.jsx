import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number }) => {
    return (
        <li key={id}>{name}: {number} <button type="button">Delete</button></li>
    )
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}
