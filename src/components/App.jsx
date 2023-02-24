import { BookForm } from "./BookForm/BookForm";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  return (
    <div>
     <h1>Phonebook</h1>
     <BookForm/>
     <ContactList/>
    </div>
  );
};