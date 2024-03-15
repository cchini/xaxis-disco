import { useState } from 'react';
import { Campaign } from '@models/campaigns.model';
import { CreativeMatrix } from '@models/creativeMatrix.model';
import useFetchAndLoad from '@hooks/useFetchAndLoad';
import { getAllCampaigns } from '@services/campaigns.service';
import { getAllCreativeMatrix } from '@services/creativeMatrix.service';
import { useAsync } from '@hooks/useAsyncAxios';
import { allCampaignsAdapter } from '@adapters/campaign.adapter';
import { allCreativeMatrixAdapter } from '@adapters/creativeMatrix.adapter';

const useDataCampaigns = (): [Campaign[], CreativeMatrix[], boolean] => {
  const [campaignList, setCampaignList] = useState<Campaign[]>([]);
  const [matrixList, setMatrixList] = useState<CreativeMatrix[]>([]);
  const { loading, callEndpoint } = useFetchAndLoad();
  const getApiCampaigns = async () => await callEndpoint(getAllCampaigns());
  const getApiMatrix = async () => await callEndpoint(getAllCreativeMatrix());
  useAsync(
    getApiCampaigns,
    response => setCampaignList(allCampaignsAdapter(response)),
    () => {},
  );
  useAsync(
    getApiMatrix,
    response => setMatrixList(allCreativeMatrixAdapter(response, true)),
    () => {},
  );

  return [campaignList, matrixList, loading];
};

export default useDataCampaigns;
