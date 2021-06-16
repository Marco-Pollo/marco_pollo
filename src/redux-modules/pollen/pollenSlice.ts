import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FetchState } from '../../utils/fetch';
import { Pollen } from '../../types/pollen';
import { loadPollen } from './pollenActions';

const categoriesAdapter = createEntityAdapter<Pollen>({
    selectId: (c) => c.id,
})

const pollenSlice = createSlice({
    name: 'pollen',
    initialState: categoriesAdapter.getInitialState({
        fetchState: FetchState.INITIAL,
    }),
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(loadPollen.pending, (draft) => {
            draft.fetchState = FetchState.FETCHING;
        })
        .addCase(loadPollen.fulfilled, (draft, action) => {
            draft.fetchState = FetchState.FETCHED;
            categoriesAdapter.addMany(draft, action.payload);
        })
        .addCase(loadPollen.rejected, (draft) => {
            draft.fetchState = FetchState.ERROR;
        }),
});

export default pollenSlice.reducer;
