import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStore } from '@redux/store';
import { DiscoPaths } from '../../../routes/models/path.model';
import { Button } from '@components/index';
import Layout from '../../common/Layout/Layout';
import RuleModal from '../components/RuleModal/RuleModal';
import HeaderNew from '../components/HeaderNew/HeaderNew';
import GroupPriority from '../components/GroupPriority/GroupPriority';
import './newCampaigns.scss';

const NewCampaignsStep1 = () => {
  const navigate = useNavigate();
  const store = useSelector((store: AppStore) => store.matrix);
  const [open, setOpen] = useState(false);

  return (
    <Layout className="campaignsNewPage">
      <RuleModal
        openModal={setOpen}
        activeModal={open}
        matrixList={store?.matrixList}
      />
      <h1 className="campaignsNewPage_title">Create a new Campaign</h1>
      <HeaderNew />
      <GroupPriority setOpen={setOpen} />

      <footer className="footerNewCampaign">
        <Button
          hierarchy="secondary"
          className="footerNewCampaign_btn"
          onClick={() => navigate(`/${DiscoPaths.Campaigns}`)}>
          Cancel
        </Button>
        <Button
          className="footerNewCampaign_btn"
          onClick={() => navigate(`/${DiscoPaths.Campaigns}`)}>
          Save
        </Button>
      </footer>
    </Layout>
  );
};

export default NewCampaignsStep1;
