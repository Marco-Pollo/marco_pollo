import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserSettings } from '../../types/userSettings';

export const loadUserSettings = createAsyncThunk(
    'userSettings/load',
    async (data, { getState, dispatch, rejectWithValue }) => {
        return {} as UserSettings;
    },
)
