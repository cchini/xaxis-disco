import { loadAbort } from '@utilities/load-abort-axios.utility';
import { Account } from '@models/account.model';
import axios from 'axios';

const DISCO_API = process.env.DISCO_API;
const ACCOUNT_ID = process.env.ACCOUNT_ID;

export const getAccounts = () => {
  const controller = loadAbort();
  return {
    call: axios.get<Account[]>(
      `${DISCO_API}/account/?accountId=${ACCOUNT_ID}`,
      {
        signal: controller.signal,
      },
    ),
    controller,
  };
};

export const sendApproval = (email: string) => {
  const controller = loadAbort();
  return {
    call: axios.post(`${DISCO_API}/account/sendMail/?to=${email}`),
    controller,
  };
};
