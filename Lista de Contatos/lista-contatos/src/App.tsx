import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';
import { Contact } from './types/types';


const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editableContact, setEditableContact] = useState<Contact | null>(null);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddOrUpdate = (contact: Contact) => {
    if (editableContact) {
      setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
      setEditableContact(null);
    } else {
      setContacts([...contacts, { ...contact, id: Date.now().toString() }]);
    }
  };

  const deleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="app-container">
      <div className="container">
        <h1 className="text-header">Lista de Contatos</h1>
        <ContactForm onSubmit={handleAddOrUpdate} initialContact={editableContact || undefined} />
        <h2 className="text-header">Contatos</h2>
        <ContactList
          contacts={contacts}
          onEdit={(contact) => setEditableContact(contact)}
          onDelete={deleteContact}
        />
      </div>
    </div>
  );
};

export default App;
