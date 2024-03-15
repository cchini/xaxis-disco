import { NewMatrix } from '@models/creativeMatrix.model';

export const newMatrixTable: NewMatrix[] = [
  {
    discoId: '1',
    reportingLabel: 'Reporting Label 01',
    instagram: {
      pageId: '5345345345',
      campaignId: '1',
      adSetId: null,
    },
    facebook: {
      pageId: '112122981631024',
      campaignId: '1',
      adSetId: '112122981',
    },
    tiktok: {
      pageId: '112122981631024',
      campaignId: null,
      adSetId: '112122981',
    },
    mainImage: {
      image: null,
    },
    carousel: [],
    placement: [],
  },
  {
    discoId: '2',
    reportingLabel: 'Reporting Label 02',
    instagram: {
      pageId: '5345345345',
      campaignId: null,
      adSetId: '112122981',
    },
    facebook: {
      pageId: '112122981631024',
      campaignId: null,
      adSetId: '112122981',
    },
    tiktok: {
      pageId: '112122981631024',
      campaignId: null,
      adSetId: '112122981',
    },
    mainImage: null,
    carousel: [],
    placement: [],
  },
];
