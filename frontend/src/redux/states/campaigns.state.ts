import { createSlice } from '@reduxjs/toolkit';
import { ReduxCampaigns, Rule } from '@models/campaigns.model';
import { emptyRule } from '@mocks/rules.mock';

export const CampaignsEmptyState: ReduxCampaigns = {
  rules: [emptyRule],
  reapeatMock: 0,
};

export const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState: CampaignsEmptyState,
  reducers: {
    modifyRules: (state, action) => ({
      ...state,
      rules: action.payload,
    }),
    resetCampaigns: () => CampaignsEmptyState,

    addRepeatMock: state => ({
      ...state,
      reapeatMock: state?.reapeatMock + 1,
    }),
  },
});

export const { modifyRules, resetCampaigns, addRepeatMock } =
  campaignsSlice.actions;

export default campaignsSlice.reducer;
