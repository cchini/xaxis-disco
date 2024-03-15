import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AppStore } from '@redux/store';
import { Button, Select } from '@components/index';
import { triggerTypes, conditions, days, dayParts } from '@mocks/rules.mock';
import { TriggerTypes } from '@models/public.model';
import { Rule } from '@models/campaigns.model';
import { modifyRules } from '@redux/states/campaigns.state';

interface RuleSectionProps {
  rule?: Rule;
  totalRules: number;
}

const RuleSection: FC<RuleSectionProps> = props => {
  const { rule, totalRules } = props;
  const store = useSelector((store: AppStore) => store.campaigns);
  const dispatch = useDispatch();
  const [triggerType, setTriggerType] = useState(null);
  const [condition, setCondition] = useState(null);

  const valuesTypes = () => {
    let options = [];
    if (triggerType) {
      if (triggerType?.value === TriggerTypes?.WeekDay) options = days;
      if (triggerType?.value === TriggerTypes?.DayPart) options = dayParts;
    }
    return options;
  };

  const handleNewTriggerRule = () => {
    const rules = [...store?.rules];
    const findRule = rules.find(value => value?.id === rule?.id);
    if (findRule) {
      const cloneRule = { ...findRule };
      const cloneTrigger = [...findRule?.trigger];
      cloneTrigger.push({
        id: uuidv4(),
        trigger: { label: null, value: null },
        condition: { label: null, value: null },
        value: { label: null, value: null },
      });
      cloneRule.trigger = cloneTrigger;
      rules.splice(
        rules.findIndex(value => value?.id === rule?.id),
        1,
      );
      rules.push(cloneRule);
      dispatch(modifyRules(rules));
    }
  };

  const handleRemove = (id: string) => {
    const rules = [...store?.rules];
    const findRule = rules.find(value => value?.id === rule?.id);
    if (findRule) {
      const cloneRule = { ...findRule };
      const cloneTrigger = [...cloneRule?.trigger];
      cloneTrigger.splice(
        cloneTrigger.findIndex(value => value?.id === id),
        1,
      );
      cloneRule.trigger = cloneTrigger;
      rules.splice(
        rules.findIndex(value => value?.id === rule?.id),
        1,
      );
      rules.push(cloneRule);
      dispatch(modifyRules(rules));
    }
  };

  return (
    <section className="listCreateRule">
      {rule?.trigger?.map(trigger => (
        <>
          <ul className="listSelect">
            <li className="listSelect_item">
              <Select
                classNameSelect="selectRule"
                options={triggerTypes}
                onChange={value => setTriggerType(value)}
                isClearable={false}
              />
            </li>
            <li className="listSelect_item">
              <Select
                classNameSelect="selectRule"
                options={conditions}
                onChange={value => setCondition(value)}
                isClearable={false}
              />
            </li>
            <li className="listSelect_item">
              <Select options={valuesTypes()} classNameSelect="selectRule" />
            </li>
            <li className="listSelect_item listSelect_item__btn">
              <button
                className="btnRemoveRow"
                onClick={() => handleRemove(trigger?.id)}
                disabled={totalRules === 1 && rule?.trigger?.length === 1}>
                <span className="iconXaxis iconXaxis-trash-alt"></span>
              </button>
            </li>
          </ul>
        </>
      ))}
      <div className="addListSelect">
        <Button
          hierarchy="secondary"
          className="addListSelect_btn"
          onClick={() => handleNewTriggerRule()}>
          Or <span className="iconXaxis iconXaxis-plus"></span>
        </Button>
      </div>
    </section>
  );
};

export default RuleSection;
