import { RootState } from '../store';

export const selectScore = (state: RootState): number => state.workingData.score;
export const selectDate = (state: RootState): string => state.workingData.date;
