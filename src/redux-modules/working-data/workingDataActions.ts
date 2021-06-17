import { createAsyncThunk } from '@reduxjs/toolkit';
import { workingDataActions } from './workingDataSlice';
import { GetScoreForDay } from '../../utils/pollen';
import { RootState } from '../store';

export const actionCalcScore = createAsyncThunk(
    'workingData/calcScore',
    async (data: Date, { getState, dispatch }) => {
        const { pollen, userSettings } = getState() as RootState;
        dispatch(workingDataActions.setScore(
            GetScoreForDay(userSettings.selectedPollen.map((id) => pollen.entities[id]!), data).score
        ));
    },
);
