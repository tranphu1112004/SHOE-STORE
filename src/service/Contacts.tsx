// src/services/ContactService.ts
import instance from "../config/axios";
import { IContact } from "../interfaces/IUser";

// Submit a new contact form
export const SubmitContactForm = async (contact: IContact): Promise<IContact> => {
    try {
        const response = await instance.post("/contacts", contact);
        return response.data;
    } catch (error) {
        console.error("Error while submitting the contact form:", error);
        throw error;
    }
};

// Get a contact by ID
export const GetContactById = async (id: string | number): Promise<IContact> => {
    try {
        const response = await instance.get(`/contacts/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error while fetching contact with ID ${id}:`, error);
        throw error;
    }
};

// Get all contacts
export const GetAllContacts = async (): Promise<IContact[]> => {
    try {
        const response = await instance.get("/contacts");
        return response.data;
    } catch (error) {
        console.error("Error while fetching all contacts:", error);
        throw error;
    }
};

// Delete a contact by ID
export const DeleteContact = async (id: string | number): Promise<void> => {
    try {
        await instance.delete(`/contacts/${id}`);
    } catch (error) {
        console.error(`Error while deleting contact with ID ${id}:`, error);
        throw error;
    }
};
