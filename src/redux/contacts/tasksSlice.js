import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const isPendingAction = action => {
  return action.type.endsWith('/pending');
};

const isRejectAction = action => {
  return action.type.endsWith('/rejected');
};

const tasksSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items = actions.payload;
      })

      .addCase(addContact.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(actions.payload);
      })

      .addCase(removeContact.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          item => item.id === actions.payload.id
        );

        state.items.splice(index, 1);
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectAction, handleRejected)
      .addDefaultCase(state => {
        state.error = 'someone use old function, fix it!';
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
