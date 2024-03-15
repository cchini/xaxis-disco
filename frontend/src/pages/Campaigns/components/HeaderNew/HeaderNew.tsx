import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Input } from '@components/index';

const HeaderNew = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <nav className="filtersNewCampaigns">
      <Input placeholder="Name" label="Name" />
      <div className="filtersNewCampaigns_field">
        <label className="labelDatePicker">Date start</label>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          placeholder="dd/mm/AAAA"
        />
      </div>
      <div className="filtersNewCampaigns_field">
        <label className="labelDatePicker">Date end</label>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          placeholder="dd/mm/AAAA"
        />
      </div>
      <Input
        placeholder="$50.000"
        label="Budget($USD)"
        className="filtersNewCampaigns_field"
      />

      <Input
        placeholder="KPI"
        label="KPI"
        className="filtersNewCampaigns_field"
      />

      <Input
        placeholder="Goal"
        label="Goal"
        className="filtersNewCampaigns_field"
      />
    </nav>
  );
};

export default HeaderNew;
