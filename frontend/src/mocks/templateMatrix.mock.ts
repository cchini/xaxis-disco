import { TemplateMatrix } from '@models/creativeMatrix.model';

export const data: TemplateMatrix[] = [
  {
    id: '1',
    title: 'All channels (FB & IG, TikTok, SONA)',
    platforms: [
      {
        name: 'Instragram',
        code: 'INSTAGRAM',
        enabled: true,
      },
      {
        name: 'Facebook',
        code: 'FACEBOOK',
        enabled: true,
      },
      {
        name: 'Messenger',
        code: 'MESSENGER',
        enabled: true,
      },
      {
        name: 'Tiktok',
        code: 'TIKTOK',
        enabled: true,
      },
      {
        name: 'Sona',
        code: 'SONA',
        enabled: true,
      },
    ],
  },
  {
    id: '2',
    title: 'Facebook & Instagram',
    platforms: [
      {
        name: 'Instragram',
        code: 'INSTAGRAM',
        enabled: true,
      },
      {
        name: 'Facebook',
        code: 'FACEBOOK',
        enabled: true,
      },
      {
        name: 'Messenger',
        code: 'MESSENGER',
        enabled: false,
      },
      {
        name: 'Tiktok',
        code: 'TIKTOK',
        enabled: false,
      },
      {
        name: 'Sona',
        code: 'SONA',
        enabled: false,
      },
    ],
  },
  {
    id: '3',
    title: 'SONA',
    platforms: [
      {
        name: 'Instragram',
        code: 'INSTAGRAM',
        enabled: false,
      },
      {
        name: 'Facebook',
        code: 'FACEBOOK',
        enabled: false,
      },
      {
        name: 'Messenger',
        code: 'MESSENGER',
        enabled: false,
      },
      {
        name: 'Tiktok',
        code: 'TIKTOK',
        enabled: false,
      },
      {
        name: 'Sona',
        code: 'SONA',
        enabled: true,
      },
    ],
  },
  {
    id: '4',
    title: 'TikTok',
    platforms: [
      {
        name: 'Instragram',
        code: 'INSTAGRAM',
        enabled: false,
      },
      {
        name: 'Facebook',
        code: 'FACEBOOK',
        enabled: false,
      },
      {
        name: 'Messenger',
        code: 'MESSENGER',
        enabled: false,
      },
      {
        name: 'Tiktok',
        code: 'TIKTOK',
        enabled: true,
      },
      {
        name: 'Sona',
        code: 'SONA',
        enabled: false,
      },
    ],
  },
  {
    id: '5',
    title: 'Facebook, Instagram & SONA',
    platforms: [
      {
        name: 'Instragram',
        code: 'INSTAGRAM',
        enabled: true,
      },
      {
        name: 'Facebook',
        code: 'FACEBOOK',
        enabled: true,
      },
      {
        name: 'Messenger',
        code: 'MESSENGER',
        enabled: false,
      },
      {
        name: 'Tiktok',
        code: 'TIKTOK',
        enabled: false,
      },
      {
        name: 'Sona',
        code: 'SONA',
        enabled: true,
      },
    ],
  },
];
