import React from 'react';
import Router from './routes/Router';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { modifyListAccounts, modifyAccount } from '@redux/states/account.state';
import { modifyListMatrix } from '@redux/states/creativeMatrix.state';
import { getAccountStorage } from '@utilities/localstorage.utility';
import useDataInit from '@hooks/useInitData';
import './index.scss';

const App = () => {
  const storageAccount = getAccountStorage();
  const [accountList, matrixList, loading] = useDataInit();

  if (loading) return null;

  store.dispatch(modifyListAccounts(accountList));
  store.dispatch(modifyListMatrix(matrixList));

  if (accountList?.length > 0) {
    if (storageAccount) {
      const findAccount = accountList?.find(
        value => value?.account?.id?.toString() === storageAccount,
      );
      if (findAccount) {
        store.dispatch(modifyAccount(findAccount));
      }
    } else {
      store.dispatch(modifyAccount(accountList[0]));
    }
  }

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
