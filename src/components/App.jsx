import React from "react"
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

import { BookForm } from "./BookForm/BookForm";
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
  return (
    <Layout>
    <GlobalStyle/>
      <h1>Phonebook</h1>
      <BookForm/>
      <ContactList/>
    </Layout>
  );
};