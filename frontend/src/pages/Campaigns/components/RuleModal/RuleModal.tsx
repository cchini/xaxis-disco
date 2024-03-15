import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from '@components/index';
import { CreativeMatrix } from '@models/creativeMatrix.model';
import RuleHeader from './RuleHeader';
import RuleAccordion from './RuleAccordion';
import CreativeAccordion from './CreativeAccordion';
import ChannelAccordion from './ChannelAccordion';
import { addRepeatMock } from '@redux/states/campaigns.state';

interface RuleModalProps {
  openModal: (open: boolean) => void;
  activeModal: boolean;
  matrixList: CreativeMatrix[];
}

const RuleModal: FC<RuleModalProps> = props => {
  const { openModal, activeModal, matrixList } = props;
  const dispatch = useDispatch();
  return (
    <Modal
      className="modalCampaigns"
      active={activeModal}
      onClose={() => openModal(false)}
      header={
        <header className="headerModalCampaigns">
          <div className="headerModalCampaignsTitle">
            <p className="headerModalCampaignsTitle_detail">Edit</p>
            <h3 className="headerModalCampaignsTitle_context">
              Audience a Morning | Weedkays
            </h3>
          </div>
          <Button
            onClick={() => openModal(false)}
            className="headerModalCampaigns_btn"
            hierarchy="secondary">
            X
          </Button>
        </header>
      }>
      <section className="modalCampaignsContent">
        <RuleHeader options={matrixList} />
        <section className="rulesSection">
          <RuleAccordion />
          <CreativeAccordion />
          <ChannelAccordion />
        </section>
      </section>
      <footer className="footerModal">
        <Button onClick={() => openModal(false)} hierarchy="secondary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            openModal(false);
            dispatch(addRepeatMock());
          }}>
          Save
        </Button>
      </footer>
    </Modal>
  );
};

export default RuleModal;
