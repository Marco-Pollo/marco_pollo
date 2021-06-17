import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserSettings } from '../../types/userSettings';

export const loadUserSettings = createAsyncThunk(
    'userSettings/load',
    async () => {
        return {
            selectedPollen: [1, 2, 3],
        } as UserSettings;
    },
);
