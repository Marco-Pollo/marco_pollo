import { createSlice } from '@reduxjs/toolkit';

export interface WorkingData {
    score: number,
    date: string,
}

const initialState: WorkingData = {
    score: 0,
    date: `${new Date()
        .getFullYear()}-${new Date().getMonth() < 10 ? `0${new Date()
        .getMonth()}` : new Date()
        .getMonth()}-${new Date().getDate() < 10 ? `0${new Date()
        .getDate()}` : new Date()
        .getDate()}`
};

const workingDataSlice = createSlice({
    name: 'workingData',
    initialState,
    reducers: {
        setScore: (draft, { payload: score }) => {
            draft.score = score as number;
        },
        setDate: (draft, { payload: date }) => {
            draft.date = date as string;
        }
    }
});

export const workingDataActions = workingDataSlice.actions;
export default workingDataSlice.reducer;
