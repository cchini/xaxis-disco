import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import { Button } from '@components/index';
import { TemplateCampaigns } from '@models/campaigns.model';
import { DiscoPaths } from '@routes/models/path.model';

interface TemplateCardProps {
  data: TemplateCampaigns[];
}

const TemplateCard: FC<TemplateCardProps> = props => {
  const { data } = props;
  const navigate = useNavigate();

  const iconsPlataform = plataform => {
    const baseClass = 'iconXaxis iconXaxis-';
    switch (plataform) {
      case 'KPI':
        return `${baseClass}filter`;
      case 'Audiences':
        return `${baseClass}users`;
      case 'Location':
        return `${baseClass}map-marked-alt`;
      case 'Week days':
        return `${baseClass}calendar`;
      case 'Days part':
        return `${baseClass}clock`;
    }
  };

  return (
    <section className="cardsContent cardsTamplatesCampaigns">
      {data?.map(template => (
        <article className="cardsTemplates">
          <ul className="listIconsTemplates">
            {template.platforms?.map(platform => {
              if (platform?.enabled) {
                return (
                  <li className="listIconsTemplates_item">
                    <span
                      className={`${iconsPlataform(platform?.code)}`}></span>
                  </li>
                );
              }
            })}
          </ul>
          <div className="optionsTemplate">
            <Button
              onClick={() => navigate(`/${DiscoPaths.NewCampaigns}`)}
              className="optionsTemplate_btn">
              Select
            </Button>
            <Button hierarchy="secondary" className="optionsTemplate_btn">
              Details
            </Button>
          </div>
          <h3 className="cardsTemplates_title">{template.title}</h3>
        </article>
      ))}
    </section>
  );
};

export default TemplateCard;
