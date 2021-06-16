import { RootState } from '../store';

export const selectUserSettings = (state: RootState) => state.userSettings;
export const selectUserPollen = (state: RootState) => state.userSettings.selectedPollen;
