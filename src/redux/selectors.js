import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading
export const getError = state => state.contacts.error

export const getFilter = state => state.filter;

export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {

        if (!filter) {
            return contacts;
        }

        const lowerCaseFilter = filter.toLowerCase()

        const visibleContacts = contacts.filter(contact => {
            const lowerCaseContact = contact.toLowerCase()

            return lowerCaseContact.includes(lowerCaseFilter)
        })

        return visibleContacts
    }
)