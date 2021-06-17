import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pollen } from '../../types/pollen';
import pollen from '../../constants/JSON/pollen.json';

export const loadPollen = createAsyncThunk(
    'pollen/load',
    async (data, { getState, dispatch, rejectWithValue }) => {
        return pollen as Array<Pollen>;
    },
);
