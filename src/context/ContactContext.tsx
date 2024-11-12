// src/context/ContactContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import {
    SubmitContactForm,
    GetContactById,
    GetAllContacts,
    DeleteContact
} from "../service/Contacts"; // Đường dẫn đến ContactsService
import { IContact } from "../interfaces/IUser"; // Đường dẫn đến IContact

interface ContactContextType {
    contacts: IContact[];
    submitContact: (contact: IContact) => Promise<boolean>;
    fetchContactById: (id: string | number) => Promise<IContact>;
    fetchAllContacts: () => Promise<void>;
    removeContact: (id: string | number) => Promise<void>;
    loading: boolean;
    error: string | null;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submitContact = async (formData: IContact): Promise<boolean> => {
        setLoading(true);
        setError(null);
        try {
            const response = await SubmitContactForm(formData);
            if (!response) {
                throw new Error('Failed to submit');
            }
            return true; 
        } catch (error) {
            console.error(error);
            setError('Failed to submit the contact form.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const fetchContactById = async (id: string | number): Promise<IContact> => {
        setLoading(true);
        setError(null);
        try {
            const contact = await GetContactById(id);
            return contact;
        } catch (err) {
            setError(`Error fetching contact with ID ${id}.`);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const fetchAllContacts = async () => {
        setLoading(true);
        setError(null);
        try {
            const allContacts = await GetAllContacts();
            setContacts(allContacts);
        } catch (err) {
            setError("Error fetching all contacts.");
        } finally {
            setLoading(false);
        }
    };

    const removeContact = async (id: string | number): Promise<void> => {
        setLoading(true);
        setError(null);
        try {
            await DeleteContact(id);
            setContacts((prev) => prev.filter(contact => contact.id !== id));
        } catch (err) {
            setError(`Error deleting contact with ID ${id}.`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ContactContext.Provider value={{ contacts, submitContact, fetchContactById, fetchAllContacts, removeContact, loading, error }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error("useContact must be used within a ContactProvider");
    }
    return context;
};
