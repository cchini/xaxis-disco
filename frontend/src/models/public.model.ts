export interface PagePlatform {
  name: string;
  code: string;
  enabled: boolean;
  placements?: Placement[];
}

export interface Placement {
  code: string;
  name: string;
}

export enum RRSS {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  TikTok = 'TIKTOK',
  Sona = 'SONA',
}

export enum FacebookPlacements {
  Feed = 'FACEBOOK_NEWS_FEED',
  Marketplace = 'FACEBOOK_MARKETPLACE',
  VideoFeeds = 'FACEBOOK_VIDEO_FEEDS',
  Stories = 'FACEBOOK_STORIES',
  InStreamVideos = 'FACEBOOK_IN_STREAM_VIDEOS',
  SearchResults = 'FACEBOOK_SEARCH_RESULTS',
}

export enum InstagramPlacements {
  Feed = 'INSTAGRAM_FEED',
  Explore = 'INSTAGRAM_EXPLORE',
  Stories = 'INSTAGRAM_STORIES',
  IGTV = 'INSTAGRAM_IGTV',
}

export interface Status {
  id: string;
  name: string;
  code: string;
}

export interface Option {
  label: string;
  value: string;
}

export enum TriggerTypes {
  WeekDay = 'WEEK_DAY',
  DayPart = 'DAY_PART',
}

export enum Conditions {
  EqualTo = '==',
  GreaterThan = '>',
  LessThan = '<',
  GreaterThanOrEqualTo = '>=',
  LessThanOrEqualTo = '<=',
  NotEqualTo = '<>',
}

export enum Days {
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
}
