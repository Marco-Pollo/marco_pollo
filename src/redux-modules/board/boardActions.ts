import { createAsyncThunk } from '@reduxjs/toolkit';
import { RequestError } from 'chayns-helper';
import getBoard from '../../api/board/getBoard';
import { Board } from '../types';

export const fetchBoard = createAsyncThunk<Board, void, { rejectValue: void }>(
    'board/fetchBoard',
    async (arg, { getState, rejectWithValue }) => getBoard()
        .catch((ex: RequestError | Error) => {
            const { status } = ex as RequestError;
            // handle error status code side effects like chayns.login

            return rejectWithValue();
        })
);
