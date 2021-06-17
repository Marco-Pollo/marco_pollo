import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserSettings } from '../../types/userSettings';
import { lsUserSelectionKey } from '../../constants/globals';

export const loadUserSettings = createAsyncThunk(
    'userSettings/load',
    async () => {
        const str = localStorage.getItem(lsUserSelectionKey) || '[]';
        return {
            selectedPollen: JSON.parse(str as string) as Array<number>,
        } as UserSettings;
    },
);
