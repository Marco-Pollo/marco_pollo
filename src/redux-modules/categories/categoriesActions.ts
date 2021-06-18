import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category } from '../../types/category';
import categories from '../../constants/JSON/category.json';

export const loadCategories = createAsyncThunk(
    'categories/load',
    async (data, { getState, dispatch, rejectWithValue }) => categories as Array<Category>,
);
