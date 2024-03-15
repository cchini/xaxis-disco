import React from 'react';
import { Switch } from '@components/index';

const RuleCard = () => {
  return (
    <article className="cardRule">
      <h3 className="cardRule_title">Audience a morning | Weekdays</h3>
      <span className="cardRule_detail">Creative: 10</span>
      <ul className="listSwitchRules">
        <li className="listSwitchRules_item">
          <Switch
            className="swicthRule"
            name="META-Audience"
            label={
              <div className="labelsIcons">
                <span className="iconXaxis  iconXaxis-facebook-f"></span>
                <span className="iconXaxis  iconXaxis-instagram"></span>
                <span className="iconXaxis  iconXaxis-facebook-messenger"></span>
              </div>
            }
          />
        </li>
        <li className="listSwitchRules_item">
          <Switch
            label={
              <div className="labelsIcons">
                <span className="iconXaxis  iconXaxis-tiktok"></span>
              </div>
            }
            name="tiktok-Audience"
            className="swicthRule"
          />
        </li>
        <li className="listSwitchRules_item">
          <Switch
            label="S"
            name="SONA-Audience"
            className="swicthRule swicthRule__sona"
          />
        </li>
      </ul>
    </article>
  );
};

export default RuleCard;
