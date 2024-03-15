import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import { Button } from '@components/index';
import { TemplateMatrix } from '@models/creativeMatrix.model';
import { DiscoPaths } from '@routes/models/path.model';
import { iconByPlatform } from '@utilities/common.utility';

interface TemplateCardProps {
  data: TemplateMatrix[];
  openModal: (value: TemplateMatrix) => void;
}

const TemplateCard: FC<TemplateCardProps> = props => {
  const { data, openModal } = props;
  const navigate = useNavigate();

  return (
    <section className="cardsContent cardsTamplatesCreativeMatrix">
      {data?.map(template => (
        <article className="cardsTemplates">
          <ul className="listIconsTemplates">
            {template.platforms?.map(platform => {
              if (platform?.enabled) {
                return (
                  <li className="listIconsTemplates_item">
                    {platform?.code === 'SONA' ? (
                      <span className="listIconsTemplates__sona">S</span>
                    ) : (
                      <span
                        className={`${iconByPlatform(platform?.code)}`}></span>
                    )}
                  </li>
                );
              }
            })}
          </ul>
          <div className="optionsTemplate">
            <Button
              onClick={() => navigate(`/${DiscoPaths.NewMatrixStep2}`)}
              className="optionsTemplate_btn">
              Select
            </Button>
            <Button
              onClick={() => openModal(template)}
              className="optionsTemplate_btn"
              hierarchy="secondary">
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
