import { v4 as uuidv4 } from 'uuid';
import { Option, TriggerTypes, Conditions, Days } from '@models/public.model';
import { Rule } from '@models/campaigns.model';

export const emptyRule: Rule = {
  id: uuidv4(),
  trigger: [
    {
      id: uuidv4(),
      trigger: { label: null, value: null },
      condition: { label: null, value: null },
      value: { label: null, value: null },
    },
  ],
  orderBy: 0,
};

export const triggerTypes: Option[] = [
  {
    label: 'Week day',
    value: TriggerTypes.WeekDay,
  },
  {
    label: 'Day part',
    value: TriggerTypes.DayPart,
  },
];

export const conditions: Option[] = [
  {
    label: 'Equal to (==)',
    value: Conditions.EqualTo,
  },
  {
    label: 'Not equal to (<>)',
    value: Conditions.NotEqualTo,
  },
  {
    label: 'Greater than (>)',
    value: Conditions.GreaterThan,
  },
  {
    label: 'Greater than or equal to (>=)',
    value: Conditions.GreaterThanOrEqualTo,
  },
  {
    label: 'Less than (<)',
    value: Conditions.LessThan,
  },
  {
    label: 'Less than or equal to (<=)',
    value: Conditions.LessThanOrEqualTo,
  },
];

export const days: Option[] = [
  {
    label: 'Monday',
    value: Days.Monday,
  },
  {
    label: 'Tuesday',
    value: Days.Tuesday,
  },
  {
    label: 'Wednesday',
    value: Days.Wednesday,
  },
  {
    label: 'Thursday',
    value: Days.Thursday,
  },
  {
    label: 'Friday',
    value: Days.Friday,
  },
  {
    label: 'Saturday',
    value: Days.Saturday,
  },
  {
    label: 'Sunday',
    value: Days.Sunday,
  },
];

export const dayParts: Option[] = [
  {
    label: '0:00',
    value: '0:00',
  },
  {
    label: '1:00',
    value: '1:00',
  },
  {
    label: '1:30',
    value: '1:30',
  },
  {
    label: '2:00',
    value: '2:00',
  },
  {
    label: '2:30',
    value: '2:30',
  },
  {
    label: '3:00',
    value: '3:00',
  },
  {
    label: '3:30',
    value: '3:30',
  },
  {
    label: '4:00',
    value: '4:00',
  },
  {
    label: '4:30',
    value: '4:30',
  },
  {
    label: '5:00',
    value: '5:00',
  },
  {
    label: '5:30',
    value: '5:30',
  },
  {
    label: '6:00',
    value: '6:00',
  },
  {
    label: '6:30',
    value: '6:30',
  },
  {
    label: '7:00',
    value: '7:00',
  },
  {
    label: '7:30',
    value: '7:30',
  },
  {
    label: '8:00',
    value: '8:00',
  },
  {
    label: '8:30',
    value: '8:30',
  },
  {
    label: '9:00',
    value: '9:00',
  },
  {
    label: '9:30',
    value: '9:30',
  },
  {
    label: '10:00',
    value: '10:00',
  },
  {
    label: '10:30',
    value: '10:30',
  },
];
