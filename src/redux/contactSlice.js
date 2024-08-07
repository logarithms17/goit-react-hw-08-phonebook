import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

// const localContacts = localStorage.getItem('contacts')

// const initialContactsState = localContacts !== null ? JSON.parse(localContacts) : [
//     { id: '1', name: 'Neil Bryan Apostol', number: '09218017781' },
//     { id: '2', name: 'Benjamina Apostol', number: '09218234241' },
//     { id: '3', name: 'Bryce Apostol', number: '0921822331' },
// ];

// export const contactSlice = createSlice({
//     name: 'contacts',
//     initialState: initialContactsState,
//     reducers: {
//         addContact: (state, action) => {
//             state.push(action.payload);
//         },
//         deleteContact: (state, action) => {
//             return state.filter(({ id }) => id !== action.payload);
//         },
//     },
// })

// export const { addContact, deleteContact } = contactSlice.actions;
// export default contactSlice.reducer

const initialContactsState = {
    contacts: [],
    isLoading: false,
    error: null
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState: initialContactsState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            }) 
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = state.contacts.filter(({ id }) => id !== action.payload.id);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default contactSlice.reducer