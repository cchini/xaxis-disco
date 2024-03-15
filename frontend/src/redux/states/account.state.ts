import { Account, ReduxAccount } from '@models/account.model';
import { createSlice } from '@reduxjs/toolkit';

export const AccountsEmptyState: ReduxAccount = {
  account: null,
  accounts: [],
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState: AccountsEmptyState,
  reducers: {
    modifyListAccounts: (state, action) => ({
      ...state,
      accounts: action.payload,
    }),
    resetAccounts: () => AccountsEmptyState,
    modifyAccount: (state, action) => ({ ...state, account: action.payload }),
  },
});

export const { modifyListAccounts, resetAccounts, modifyAccount } =
  accountsSlice.actions;

export default accountsSlice.reducer;
