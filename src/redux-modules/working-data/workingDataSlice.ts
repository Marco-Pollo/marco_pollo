import { createSlice } from '@reduxjs/toolkit';

export interface WorkingData {
    score: number,
}
const initialState: WorkingData = {
    score: 0,
};

const workingDataSlice = createSlice({
    name: 'workingData',
    initialState,
    reducers: {
        setScore: (draft, { payload: score }) => {
            console.debug(score);
            draft.score = score as number;
        },
    },
});

export const workingDataActions = workingDataSlice.actions;
export default workingDataSlice.reducer;
