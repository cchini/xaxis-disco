import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@redux/store';
import RuleCard from './RuleCard';
import { resetCampaigns } from '@redux/states/campaigns.state';

interface HeaderNewProps {
  setOpen: (value: boolean) => void;
}

const HeaderNew: FC<HeaderNewProps> = props => {
  const { setOpen } = props;
  const store = useSelector((store: AppStore) => store.campaigns);
  const dispatch = useDispatch();

  let repeat = [];
  for (var i = 0; i < store?.reapeatMock; i++) {
    repeat.push(<RuleCard />);
  }

  return (
    <section className="rulesConfig">
      <h2 className="rulesConfig_title">priority group</h2>
      <section className="cntCardsRules">
        <section className="groupRule">
          <RuleCard />
          {repeat}
        </section>
        <article
          className="cardRule cardRule__center"
          onClick={() => {
            dispatch(resetCampaigns());
            setOpen(true);
          }}>
          <span className="cardRule_icon iconXaxis iconXaxis-plus"></span>
          <p className="cardRule_text"> Add Rule</p>
        </article>
      </section>
    </section>
  );
};

export default HeaderNew;
