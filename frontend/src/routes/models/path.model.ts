import React from 'react';

export enum DiscoPaths {
  Home = 'home',
  AccountSetup = 'account-setup',
  CreativeMatrix = 'creative-matrix',
  Campaigns = 'campaigns',
  NewMatrixStep1 = 'creative-matrix/new-1',
  NewMatrixStep2 = 'creative-matrix/new-2',
  NewCampaigns = 'campaigns/new',
  ViewCampaign = 'campaigns/view',
}

export interface DiscoPages {
  component: React.ComponentType;
  path: string;
}
