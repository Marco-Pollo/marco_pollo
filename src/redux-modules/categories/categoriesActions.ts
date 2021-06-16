import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '../../types/category';

export const loadCategories = createAsyncThunk(
    'categories/load',
    async (data, { getState, dispatch, rejectWithValue }) => {
        return [] as Array<Category>;
    },
)
