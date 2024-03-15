import { loadAbort } from '@utilities/load-abort-axios.utility';
import { Campaign } from '@models/campaigns.model';
import axios from 'axios';

const DISCO_API = process.env.DISCO_API;

export const getAllCampaigns = () => {
  const controller = loadAbort();
  return {
    call: axios.get<Campaign[]>(`${DISCO_API}/campaign/`, {
      signal: controller.signal,
    }),
    controller,
  };
};
