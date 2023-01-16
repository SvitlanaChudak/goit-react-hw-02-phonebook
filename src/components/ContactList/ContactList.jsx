import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';

export const ContactList = ({ contacts }) => (
        <ul>
        {contacts.map(({ id, name, number }) => {
                return (
            <ContactItem key={id} id={id} name={name} number={number}/>
            )
            })}
        </ul>
)

ContactList.propTypes = {
contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}
