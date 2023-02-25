import { BsFillPersonFill } from "react-icons/bs";
import { Item, List, SubmitButton } from "./ContactList.style";

export const ContactListItem = ({ contacts, onDelete }) => {
    return (
    <List>
      {contacts.map(contact => {
        return (
        <Item key={contact.id}>
          <div>
            <BsFillPersonFill/>
            <span>{contact.name}:</span>
            <span>{contact.number}</span>
          </div>
          <SubmitButton type="button" onClick={() => onDelete(contact.id)}>Delete</SubmitButton>
        </Item>
        )})}
    </List>
    )
}