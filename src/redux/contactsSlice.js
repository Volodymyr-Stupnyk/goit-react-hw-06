import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {items: []},
    reducers: {
        addContact:(state, action)=> {
            state.items.push(action.payload);
            return state;
        },
        deleteContact:(state, action)=> {
            const dataItems = state.items.filter(contact => contact.id !== action.payload);
            return { ...state, items: dataItems };
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;