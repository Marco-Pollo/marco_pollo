import { RootState } from '../store';
import { Score } from '../../types/pollen';

export const selectScore = (state: RootState): Score => state.workingData.score;
export const selectDate = (state: RootState): string => state.workingData.date;
