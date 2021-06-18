import { createSlice } from '@reduxjs/toolkit';
import { Score } from '../../types/pollen';

export interface WorkingData {
    score: Score,
    date: string,
}

const initialState: WorkingData = {
    score: {
        score: 0,
        light: {
            score: 0
        },
        mild: {
            score: 0
        },
        hard: {
            score: 0
        }
    },
    date: `${new Date()
        .getFullYear()}-${new Date().getMonth() + 1 < 10 ? `0${new Date()
        .getMonth() + 1}` : new Date()
        .getMonth() + 1}-${new Date().getDate() + 1 < 10 ? `0${new Date()
        .getDate()}` : new Date()
        .getDate()}`
};

const workingDataSlice = createSlice({
    name: 'workingData',
    initialState,
    reducers: {
        setScore: (draft, { payload: score }) => {
            draft.score = score as Score;
        },
        setDate: (draft, { payload: date }) => {
            draft.date = date as string;
        }
    }
});

export const workingDataActions = workingDataSlice.actions;
export default workingDataSlice.reducer;
