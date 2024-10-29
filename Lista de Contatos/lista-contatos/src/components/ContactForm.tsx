import React, { useState, useEffect } from 'react';
import { Contact } from '../types/types';

interface ContactFormProps {
  onSubmit: (contact: Contact) => void;
  initialContact?: Contact;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, initialContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialContact) {
      setName(initialContact.name);
      setPhone(initialContact.phone);
    } else {
      setName('');
      setPhone('');
    }
  }, [initialContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 9) {
      setError('O número de telefone deve ter pelo menos 9 dígitos.');
      return;
    }
    setError('');
    onSubmit({ id: Date.now().toString(), name, phone });
    setName('');
    setPhone('');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      setPhone(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Telefone</label>
        <input
          type="text"
          className="form-control"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
        {error && <div className="text-danger mt-2">{error}</div>}
      </div>
      <button type="submit" className="btn btn-primary">
        {initialContact ? 'Atualizar' : 'Adicionar'} Contato
      </button>
    </form>
  );
};

export default ContactForm;