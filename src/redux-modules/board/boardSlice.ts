import { createSlice } from '@reduxjs/toolkit';
import { fetchBoard } from './boardActions';
import { Board } from '../types';

export interface BoardState {
    isLoading: boolean,
    data: Board
}

const initialState: BoardState = {
    data: {} as Board,
    isLoading: true
};

// slice
const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(fetchBoard.pending, (draft) => {
            draft.isLoading = true;
        })
        .addCase(fetchBoard.fulfilled, (draft, action) => {
            const { payload } = action;
            draft.isLoading = false;
            const {
                id, tappId, siteId, locationId
            } = payload;
            draft.data = {
                id,
                tappId,
                siteId,
                locationId,
            };
        })
        .addCase(fetchBoard.rejected, (draft) => {
            draft.isLoading = false;
        }),
});

export default boardSlice.reducer;
