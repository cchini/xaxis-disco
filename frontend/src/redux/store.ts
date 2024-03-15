import { configureStore } from '@reduxjs/toolkit';
import { accountsSlice } from './states/account.state';
import { ReduxAccount } from '@models/account.model';
import { matrixSlice } from './states/creativeMatrix.state';
import { ReduxMatrix } from '@models/creativeMatrix.model';
import { campaignsSlice } from './states/campaigns.state';
import { ReduxCampaigns } from '@models/campaigns.model';

export interface AppStore {
  account: ReduxAccount;
  matrix: ReduxMatrix;
  campaigns: ReduxCampaigns;
}

export default configureStore<AppStore>({
  reducer: {
    account: accountsSlice.reducer,
    matrix: matrixSlice.reducer,
    campaigns: campaignsSlice.reducer,
  },
});
