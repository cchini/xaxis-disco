import { Campaign } from '../models/campaigns.model';

export const allCampaignsAdapter = (data: any): Campaign[] => {
  const campaigns = data?.campaigns;
  const response = campaigns?.map(value => {
    const campaign: Campaign = {
      id: value?.id,
      accountId: value?.accountId,
      name: value?.name,
      startDate: value?.startDate,
      endDate: value?.endDate,
      budget: value?.budget,
      kpi: value?.kpi,
      goal: value?.goal,
      statusId: value?.statusId,
      status: value?.status,
      modified: value?.modified,
      created: value?.created,
      typeDescription: value?.typeDescription,
    };
    return campaign;
  });
  return response;
};
