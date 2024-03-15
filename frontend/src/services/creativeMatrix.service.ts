import { loadAbort } from '@utilities/load-abort-axios.utility';
import { CreativeMatrix } from '@models/creativeMatrix.model';
import axios from 'axios';

const DISCO_API = process.env.DISCO_API;

export const getAllCreativeMatrix = () => {
  const controller = loadAbort();
  return {
    call: axios.get<CreativeMatrix[]>(`${DISCO_API}/creative-matrix/`, {
      signal: controller.signal,
    }),
    controller,
  };
};
