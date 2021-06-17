import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../utils/fetch';
import { loadUserSettings } from './userSettingsActions';
import { UserSettings } from '../../types/userSettings';
import { lsUserSelectionKey } from '../../constants/globals';

const initialState: UserSettings = {
    fetchState: FetchState.INITIAL,
    selectedPollen: []
};

const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState,
    reducers: {
        addToSelection: (draft, { payload }) => {
            draft.selectedPollen.push(payload.id);
            localStorage.setItem(lsUserSelectionKey, JSON.stringify(draft.selectedPollen));
        },
        removeFromSelection: (draft, { payload }) => {
            draft.selectedPollen = draft.selectedPollen.filter((pollenId) => pollenId !== payload.id);
            localStorage.setItem(lsUserSelectionKey, JSON.stringify(draft.selectedPollen));
        }
    },
    extraReducers: (builder) => builder
        .addCase(loadUserSettings.pending, (draft) => {
            draft.fetchState = FetchState.FETCHING;
        })
        .addCase(loadUserSettings.fulfilled, (draft, action) => {
            draft.fetchState = FetchState.FETCHED;
            draft.selectedPollen = action.payload.selectedPollen;
        })
        .addCase(loadUserSettings.rejected, (draft) => {
            draft.fetchState = FetchState.ERROR;
        })
});

export const { addToSelection, removeFromSelection } = userSettingsSlice.actions;

export default userSettingsSlice.reducer;
