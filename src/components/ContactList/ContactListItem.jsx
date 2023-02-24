import { BsFillPersonFill } from "react-icons/bs";
import { List } from "./ContactList.style";

export const ContactListItem = () => {
    return <List>
      <li><BsFillPersonFill/><span>Name</span></li>
    </List>
}