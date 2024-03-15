import {
  PagePlatform,
  Status,
  FacebookPlacements,
  InstagramPlacements,
} from '@models/public.model';

export interface CreativeMatrix {
  id: string;
  name: string;
  statusId: string;
  status: Status;
  accountId: string;
  deleted: boolean;
  created: Date;
  modified: Date;
  value?: string;
  label?: string;
  typeDescription: string;
}

export interface TemplateMatrix {
  id: string;
  title?: string;
  platforms: PagePlatform[];
}

export interface ReduxMatrix {
  matrixList: CreativeMatrix[];
}

export interface MatrixPage {
  pageId?: string;
  campaignId?: string;
  adSetId?: string;
}

export interface Carousel {
  image?: string;
  title?: string;
  account?: string;
  url?: string;
}

export interface NewMatrix {
  discoId: string;
  reportingLabel: string;
  instagram: MatrixPage;
  facebook: MatrixPage;
  tiktok?: MatrixPage;
  mainImage: Carousel;
  carousel?: Carousel[];
  placement?: InstagramPlacements[] | FacebookPlacements[];
}
