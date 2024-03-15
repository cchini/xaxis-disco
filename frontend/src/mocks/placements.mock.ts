import {
  Placement,
  FacebookPlacements,
  InstagramPlacements,
} from '@models/public.model';

export const facebook: Placement[] = [
  {
    code: FacebookPlacements?.Feed,
    name: 'Facebook news feed',
  },
  {
    code: FacebookPlacements.Marketplace,
    name: 'Facebook marketplace',
  },
  {
    code: FacebookPlacements.VideoFeeds,
    name: 'Facebook video feeds',
  },
  {
    code: FacebookPlacements.Stories,
    name: 'Facebook stories',
  },
  {
    code: FacebookPlacements.InStreamVideos,
    name: 'Facebook in-stream videos',
  },
  {
    code: FacebookPlacements.SearchResults,
    name: 'Facebook search results',
  },
];

export const instagram: Placement[] = [
  {
    code: InstagramPlacements.Stories,
    name: 'Instagram stories',
  },
  {
    code: InstagramPlacements.Feed,
    name: 'Instagram feeds',
  },
  {
    code: InstagramPlacements.Explore,
    name: 'Instagram explore',
  },
  {
    code: InstagramPlacements.IGTV,
    name: 'Instagram IGTV',
  },
];

export const tiktok: Placement[] = [
  {
    code: '1',
    name: 'Tiktok 1',
  },
  {
    code: '1',
    name: 'Tiktok 2',
  },
  {
    code: '1',
    name: 'Tiktok 3',
  },
];

export const sona: Placement[] = [
  {
    code: '1',
    name: 'Sona 1',
  },
  {
    code: '1',
    name: 'Sona 2',
  },
  {
    code: '1',
    name: 'Sona 3',
  },
];
