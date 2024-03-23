import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFiltersStatus = state => state.filters.status;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFiltersStatus],
  (contacts, filterStatus) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterStatus)
    );
  }
);
