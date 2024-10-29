import { useState, useEffect } from 'react';
import { Contact } from '../types/types';

export const useContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) setContacts(JSON.parse(storedContacts));
  }, []);

  const saveToLocalStorage = (contacts: Contact[]) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  const addContact = (contact: Contact) => {
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
    saveToLocalStorage(newContacts);
  };

  const editContact = (updatedContact: Contact) => {
    const newContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(newContacts);
    saveToLocalStorage(newContacts);
  };

  const deleteContact = (id: string) => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
    saveToLocalStorage(newContacts);
  };

  return { contacts, addContact, editContact, deleteContact };
};