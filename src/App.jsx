import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ContactForm from './Pages/ContactForm'
import ContactList from './Pages/ContactList'
import Pagination from './Pages/Pagination';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContact, setselectedContact] = useState(null)
  const contactsPerPage = 20;

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (updatedContact) =>{
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setSelectedContact(null);  

  }

  const editContact = (updatedContact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  return (
    <div className='mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-6'>CONTACT MANAGEMENT APP</h1> 
      <ContactForm addContact={addContact} 
      updateContact={updateContact}
      selectedContact={selectedContact}/>
      
      <ContactList
        contacts={currentContacts} 
        editContact={editContact}
        deleteContact={deleteContact}
      />
      <Pagination
        totalContacts={contacts.length}
        contactsPerPage={contactsPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default App;