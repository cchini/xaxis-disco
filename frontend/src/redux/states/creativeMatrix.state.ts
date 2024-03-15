import { ReduxMatrix } from '@models/creativeMatrix.model';
import { createSlice } from '@reduxjs/toolkit';

export const MatrixEmptyState: ReduxMatrix = {
  matrixList: [],
};

export const matrixSlice = createSlice({
  name: 'matrix',
  initialState: MatrixEmptyState,
  reducers: {
    modifyListMatrix: (state, action) => ({
      ...state,
      matrixList: action.payload,
    }),
    resetMatrix: () => MatrixEmptyState,
  },
});

export const { modifyListMatrix, resetMatrix } = matrixSlice.actions;

export default matrixSlice.reducer;
