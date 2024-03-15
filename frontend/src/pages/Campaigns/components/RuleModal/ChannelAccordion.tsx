import React from 'react';
import { Switch } from '@components/index';

const ChannelAccordion = () => {
  return (
    <details className="accordion">
      <summary className="accordion_title">
        Select the channels wherethe this rule apply
      </summary>
      <article className="cntItemAccordion">
        <ul className="cntItemAccordion_listOptions">
          <Switch
            label={
              <div className="labelsIcons">
                <span className="iconXaxis  iconXaxis-facebook-f"></span>
                <span className="iconXaxis  iconXaxis-instagram"></span>
                <span className="iconXaxis  iconXaxis-facebook-messenger"></span>
              </div>
            }
            name="FIM"
            className="switchChannel"
          />
          <Switch
            label={
              <div className="labelsIcons">
                <span className="iconXaxis  iconXaxis-tiktok"></span>
              </div>
            }
            name="TikTok"
            className="switchChannel"
          />
          <Switch
            label="S"
            name="SONA"
            className="switchChannel switchChannel__sona"
          />
        </ul>
      </article>
    </details>
  );
};

export default ChannelAccordion;
