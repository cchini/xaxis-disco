import { useState } from 'react';
import { CreativeMatrix } from '@models/creativeMatrix.model';
import useFetchAndLoad from '@hooks/useFetchAndLoad';
import { getAccounts } from '@services/account-setup.service';
import { getAllCreativeMatrix } from '@services/creativeMatrix.service';
import { useAsync } from '@hooks/useAsyncAxios';
import { allCreativeMatrixAdapter } from '@adapters/creativeMatrix.adapter';
import { AccountOption } from '@models/account.model';
import { accountOptionAdapter } from '@adapters/account.adapter';

const useInitData = (): [AccountOption[], CreativeMatrix[], boolean] => {
  const [accountList, setAccounts] = useState<AccountOption[]>([]);
  const [matrixList, setMatrixList] = useState<CreativeMatrix[]>([]);
  const accounts = useFetchAndLoad();
  const matrix = useFetchAndLoad();
  const getApiAccounts = async () => await accounts.callEndpoint(getAccounts());
  const getApiMatrix = async () =>
    await matrix.callEndpoint(getAllCreativeMatrix());
  useAsync(
    getApiAccounts,
    (response: any) => setAccounts(accountOptionAdapter(response)),
    () => {},
  );
  useAsync(
    getApiMatrix,
    (response: any) => {
      return setMatrixList(allCreativeMatrixAdapter(response, true));
    },
    () => {},
  );

  return [accountList, matrixList, accounts.loading && matrix.loading];
};

export default useInitData;
