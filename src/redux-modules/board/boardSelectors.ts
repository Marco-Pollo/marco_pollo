// export state
import { Board } from '../types';
import { RootState } from '../store';
import { BoardState } from './boardSlice';

export const selectBoardMeta = (state: RootState): BoardState => state?.board;
export const selectBoard = (state: RootState): Board => state?.board?.data;
export const selectBoardId = (state: RootState): number | undefined => state?.board?.data?.id;
