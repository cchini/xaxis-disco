import { AccountOption, Account } from '../models/account.model';

export const accountOptionAdapter = (data: any): AccountOption[] => {
  const listAccounts: Account[] = data ? [data] : [];
  const accounts: AccountOption[] = listAccounts?.map((acc: Account) => {
    return { account: acc, label: acc?.name, value: acc.id };
  });
  return accounts;
};
