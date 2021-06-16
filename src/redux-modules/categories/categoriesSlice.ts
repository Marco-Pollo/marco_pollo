import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { loadCategories } from './categoriesActions';
import { Category } from '../../types/category';
import { FetchState } from '../../utils/fetch';

const categoriesAdapter = createEntityAdapter<Category>({
    selectId: (c) => c.id,
});

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: categoriesAdapter.getInitialState({
        fetchState: FetchState.INITIAL,
    }),
    reducers: {},
    extraReducers: (builder) => builder
        .addCase(loadCategories.pending, (draft) => {
            draft.fetchState = FetchState.FETCHING;
        })
        .addCase(loadCategories.fulfilled, (draft, action) => {
            draft.fetchState = FetchState.FETCHED;
            categoriesAdapter.addMany(draft, action.payload);
        })
        .addCase(loadCategories.rejected, (draft) => {
            draft.fetchState = FetchState.ERROR;
        }),
});

export default categoriesSlice.reducer;
