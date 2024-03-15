import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@redux/store';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@components/index';
import RuleSection from './RuleSection';
import { Rule } from '@models/campaigns.model';
import { modifyRules } from '@redux/states/campaigns.state';

const RuleAccordion = () => {
  const store = useSelector((store: AppStore) => store.campaigns);
  const dispatch = useDispatch();
  const cloneRules = [...store?.rules];

  return (
    <details className="accordion">
      <summary className="accordion_title">Rules</summary>
      <article className="cntItemAccordion cntItemAccordion_first">
        <header className="headerFieldsColumn">
          <ul className="list">
            <li className="list_item">Tigger Type</li>
            <li className="list_item">Condition</li>
            <li className="list_item">Value</li>
          </ul>
        </header>
        {store?.rules?.length === 0 && (
          <RuleSection totalRules={store?.rules?.length} />
        )}

        {store?.rules?.length > 0 && (
          <>
            {cloneRules
              ?.sort((a, b) => a?.orderBy - b?.orderBy)
              ?.map((rule, index) => (
                <>
                  {index !== 0 && (
                    <div className="andSection">
                      <div className="andSection_line"></div>
                      <div className="andSection_text">
                        <p>And</p>
                      </div>
                    </div>
                  )}
                  <RuleSection totalRules={store?.rules?.length} rule={rule} />
                </>
              ))}
          </>
        )}

        <Button
          className="cntItemAccordion_btn"
          onClick={() => {
            const rules = [...store?.rules];
            const emptyRule: Rule = {
              id: uuidv4(),
              trigger: [
                {
                  id: uuidv4(),
                  trigger: { label: null, value: null },
                  condition: { label: null, value: null },
                  value: { label: null, value: null },
                },
              ],
              orderBy: rules[rules.length - 1].orderBy + 1,
            };
            rules.push(emptyRule);
            dispatch(modifyRules(rules));
          }}>
          And <span className="iconXaxis iconXaxis-plus"></span>
        </Button>
      </article>
    </details>
  );
};

export default RuleAccordion;
