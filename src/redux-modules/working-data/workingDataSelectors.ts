import { RootState } from '../store';

export const selectScore = (state: RootState): number => state.workingData.score;
