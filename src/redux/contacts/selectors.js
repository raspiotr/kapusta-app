import { createSelector } from '@reduxjs/toolkit';

export const selectTransactions = state => state.transactions.transactions;
export const selectFiltersStatus = state => state.filters.status;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectTransactions, selectFiltersStatus],
  (contacts, filterStatus) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterStatus)
    );
  }
);
