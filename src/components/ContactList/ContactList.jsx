import { ContactItem } from "components/ContactItem/ContactItem";

export const ContactList = ({ id, name, number }) => {
    return (
        <ul>
          <ContactItem name={name}
          id={id}
          number={number}/>
           <ContactItem />
        </ul>
    )
}
