import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserSettings } from '../../types/userSettings';
import { lsUserSelectionKey } from '../../constants/globals';
import { workingDataActions } from '../working-data/workingDataSlice';
import { GetScoreForDay } from '../../utils/pollen';
import { RootState } from '../store';

// eslint-disable-next-line import/prefer-default-export
export const loadUserSettings = createAsyncThunk(
    'userSettings/load',
    async (_, { getState, dispatch }) => {
        const { pollen, userSettings } = getState() as RootState;
        const str = localStorage.getItem(lsUserSelectionKey) || '[]';
        const selectedPollen = JSON.parse(str as string) as Array<number>;
        dispatch(workingDataActions.setScore(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            GetScoreForDay(userSettings.selectedPollen.map((id) => pollen.entities[id]!), new Date()).score
        ));
        return {
            selectedPollen
        } as UserSettings;
    }
);
