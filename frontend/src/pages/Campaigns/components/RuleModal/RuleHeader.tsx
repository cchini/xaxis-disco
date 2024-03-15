import React, { FC } from 'react';
import { Input, Select } from '@components/index';
import { CreativeMatrix } from '@models/creativeMatrix.model';

interface RuleHeaderProps {
  options: CreativeMatrix[];
}

const RuleHeader: FC<RuleHeaderProps> = props => {
  const { options } = props;
  return (
    <>
      <p className="modalCampaignsContent_text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
        temporibus culpa nisi dolorem, voluptas, iusto illum quas dicta ad
        similique repudiandae veritatis aperiam nobis tempora cum velit itaque
        beatae. Quia?
      </p>
      <nav className="searchOptions">
        <Input label="Rule name:" className="searchOptions_field" />
        <Select
          className="searchOptions_field"
          label="Creative Matrix"
          options={options}
        />
      </nav>
    </>
  );
};

export default RuleHeader;
