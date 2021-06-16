import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pollen } from '../../types/pollen';

export const loadPollen = createAsyncThunk(
    'pollen/load',
    async (data, { getState, dispatch, rejectWithValue }) => {
        return [] as Array<Pollen>;
    },
)
