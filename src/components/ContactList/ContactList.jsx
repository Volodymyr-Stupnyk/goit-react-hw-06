import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.items);
    const search = useSelector((state) => state.filters.name);
    const filteredContacts = contacts?.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <ul className={css.container}>
            {filteredContacts?.map((contact)=> (
                <Contact
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </ul>
    );
};

export default ContactList;