import { createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../utils/fetch';
import { loadUserSettings } from './userSettingsActions';
import { UserSettings } from '../../types/userSettings';

const initialState: UserSettings = {
    fetchState: FetchState.INITIAL,
    selectedPollen: [],
}

const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState,
    reducers: {},
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
        }),
});

export default userSettingsSlice.reducer;
