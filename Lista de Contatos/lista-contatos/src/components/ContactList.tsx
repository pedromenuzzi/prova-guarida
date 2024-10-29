import React from 'react';
import { Contact } from '../types/types';

interface ContactListProps {
    contacts: Contact[];
    onEdit: (contact: Contact) => void;
    onDelete: (id: string) => void;
  }
  
  const ContactList: React.FC<ContactListProps> = ({ contacts, onEdit, onDelete }) => {
    return (
      <ul className="list-group">
        {contacts.map((contact) => (
          <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{contact.name}</strong> - {contact.phone}
            </div>
            <div>
              <button className="btn btn-success btn-sm me-2" onClick={() => onEdit(contact)}>
                Editar
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(contact.id)}>
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ContactList;