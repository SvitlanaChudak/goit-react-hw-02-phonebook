import { ContactItem } from "components/ContactItem/ContactItem";
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => (
        <ul>
        {contacts.map(({ id, name, number }) => {
                return (
            <ContactItem key={id} id={id} name={name} number={number} deleteContact={deleteContact}/>
            )
            })}
        </ul>
)

ContactList.propTypes = {
contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}
