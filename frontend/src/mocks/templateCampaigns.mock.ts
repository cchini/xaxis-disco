import { TemplateMatrix } from '@models/creativeMatrix.model';

export const data: TemplateMatrix[] = [
  {
    id: '1',
    title: 'KPI + Audiences/ocation + Week days + Days part',
    platforms: [
      {
        name: 'KPI',
        code: 'KPI',
        enabled: true,
      },
      {
        name: 'Audiences',
        code: 'Audiences',
        enabled: true,
      },
      {
        name: 'Location',
        code: 'Location',
        enabled: true,
      },
      {
        name: 'Week days',
        code: 'Week days',
        enabled: true,
      },
      {
        name: 'Days part',
        code: 'Days part',
        enabled: true,
      },
    ],
  },
  {
    id: '2',
    title: 'KPI + Audiences/Location',
    platforms: [
      {
        name: 'KPI',
        code: 'KPI',
        enabled: true,
      },
      {
        name: 'Audiences',
        code: 'Audiences',
        enabled: true,
      },
      {
        name: 'Location',
        code: 'Location',
        enabled: true,
      },
      {
        name: 'Week days',
        code: 'Week days',
        enabled: false,
      },
      {
        name: 'Days part',
        code: 'Days part',
        enabled: false,
      },
    ],
  },
  {
    id: '3',
    title: 'Audiences/Location',
    platforms: [
      {
        name: 'KPI',
        code: 'KPI',
        enabled: false,
      },
      {
        name: 'Audiences',
        code: 'Audiences',
        enabled: true,
      },
      {
        name: 'Location',
        code: 'Location',
        enabled: true,
      },
      {
        name: 'Week days',
        code: 'Week days',
        enabled: false,
      },
      {
        name: 'Days part',
        code: 'Days part',
        enabled: false,
      },
    ],
  },
  {
    id: '4',
    title: 'Audiences/ocation + Week days',
    platforms: [
      {
        name: 'KPI',
        code: 'KPI',
        enabled: false,
      },
      {
        name: 'Audiences',
        code: 'Audiences',
        enabled: true,
      },
      {
        name: 'Location',
        code: 'Location',
        enabled: true,
      },
      {
        name: 'Week days',
        code: 'Week days',
        enabled: true,
      },
      {
        name: 'Days part',
        code: 'Days part',
        enabled: false,
      },
    ],
  },
  {
    id: '5',
    title: 'Audiences/ocation + Days part',
    platforms: [
      {
        name: 'KPI',
        code: 'KPI',
        enabled: false,
      },
      {
        name: 'Audiences',
        code: 'Audiences',
        enabled: true,
      },
      {
        name: 'Location',
        code: 'Location',
        enabled: true,
      },
      {
        name: 'Week days',
        code: 'Week days',
        enabled: false,
      },
      {
        name: 'Days part',
        code: 'Days part',
        enabled: false,
      },
    ],
  },
];
