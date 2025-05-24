import css from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { MdPhone } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';


const Contact = ({ contact }) => {

    const dispatch = useDispatch();

    return (
        <li className={css.card}>
            <div className={css.infoBlock}>
                <div className={css.row}>
                    <IoMdPerson className={css.icon} />
                    <span>{contact.name}</span>
                </div>
                <div className={css.row}>
                    <MdPhone className={css.icon} />
                    <span>{contact.number}</span>
                </div>
            </div>
            <button
                type="button"
                className={css.deleteBtn}
                onClick={() => dispatch(deleteContact(contact.id))}
            >
                Delete
            </button>
        </li>
    );
};

export default Contact;