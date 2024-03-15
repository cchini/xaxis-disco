import { DiscoPaths, DiscoPages } from './models/path.model';
import Home from '../pages/Home/Home';
import AccountSetup from '../pages/AccountSetup/AccontSetup';
import Campaigns from '../pages/Campaigns/Campaigns';
import NewCampaigns from '../pages/Campaigns/NewCampaigns/NewCampaigns';
import CreativeMatrix from '../pages/CreativeMatrix/CreativeMatrix';
import NewMatrixStep1 from '../pages/CreativeMatrix/NewMatrix/NewMatrixStep1';
import NewMatrixStep2 from '../pages/CreativeMatrix/NewMatrix/NewMatrixStep2';
import ViewCampaign from '../pages/Campaigns/ViewCampaign/ViewCampaign';

export const discoPaths: DiscoPages[] = [
  {
    component: Home,
    path: DiscoPaths.Home,
  },
  {
    component: AccountSetup,
    path: DiscoPaths.AccountSetup,
  },

  {
    component: CreativeMatrix,
    path: DiscoPaths.CreativeMatrix,
  },
  {
    component: NewMatrixStep1,
    path: DiscoPaths.NewMatrixStep1,
  },
  {
    component: NewMatrixStep2,
    path: DiscoPaths.NewMatrixStep2,
  },
  {
    component: Campaigns,
    path: DiscoPaths.Campaigns,
  },
  {
    component: NewCampaigns,
    path: DiscoPaths.NewCampaigns,
  },
  {
    component: ViewCampaign,
    path: DiscoPaths.ViewCampaign,
  },
];
