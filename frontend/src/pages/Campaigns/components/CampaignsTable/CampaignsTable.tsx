import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Campaign } from '@models/Campaigns.model';
import { DiscoPaths } from '@routes/models/path.model';

interface CampaignsTableProps {
  data: Campaign[];
}

interface SimulateAction {
  status: 'Active' | 'Pending';
  id: string;
}

const CampaignsTable: FC<CampaignsTableProps> = props => {
  const { data } = props;
  const navigate = useNavigate();
  const [simulate, setSimulate] = useState<SimulateAction>(null);

  const handleSimulateAction = (id: string) => {
    setSimulate({ id, status: 'Pending' });
    setTimeout(() => {
      setSimulate(null);
    }, 2000);
  };

  return (
    <section className="table">
      <ul className="headerTable">
        <li className="headerTable_item headerTable_item__status">Status</li>
        <li className="headerTable_item headerTable_item__actions">Actions</li>
        <li className="headerTable_item">ID</li>
        <li className="headerTable_item">Name</li>
        <li className="headerTable_item">Type</li>
        <li className="headerTable_item">Budget(USD)</li>
        <li className="headerTable_item">Date Start - Date End</li>
        <li className="headerTable_item">Last update</li>
      </ul>
      {data?.map(campaign => (
        <ul key={campaign?.id} className="contentTable">
          <li className="contentTable_item contentTable_item__status">
            {simulate?.id && simulate?.id === campaign?.id
              ? simulate?.status
              : campaign?.status?.name}
          </li>
          <li className="contentTable_item contentTable_item__actions">
            <button className="iconActionsCampaign">
              <span className="iconXaxis iconXaxis-edit"></span>
              Edit
            </button>
            <button
              className="iconActionsCampaign"
              onClick={() => handleSimulateAction(campaign?.id)}>
              <span className="iconXaxis iconXaxis-edit"></span>
              Refresh
            </button>
            <button
              className="iconActionsCampaign"
              onClick={() => navigate(`/${DiscoPaths.ViewCampaign}`)}>
              <span className="iconXaxis iconXaxis-edit"></span>
              View
            </button>
            <button
              className="iconActionsCampaign"
              onClick={() => handleSimulateAction(campaign?.id)}>
              <span className="iconXaxis iconXaxis-edit"></span>
              Publish
            </button>
          </li>
          <li className="contentTable_item">{campaign?.id}</li>
          <li className="contentTable_item">{campaign?.name}</li>
          <li className="contentTable_item">{campaign?.typeDescription}</li>
          <li className="contentTable_item">{campaign?.budget}</li>
          <li className="contentTable_item">{`${dayjs(
            campaign?.startDate,
          ).format('DD/MM/YYYY')} - ${dayjs(campaign?.endDate).format(
            'DD/MM/YYYY',
          )}`}</li>
          <li className="contentTable_item">
            {dayjs(campaign?.modified).format('MMM DD, YYYY HH:mm A')}
          </li>
        </ul>
      ))}
    </section>
  );
};

export default CampaignsTable;
