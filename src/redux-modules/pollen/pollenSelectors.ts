// export state

import { RootState } from '../store';

export const selectPollen = (state: RootState) => state.pollen;
export const selectPollenFetchState = (state: RootState) => state.pollen.fetchState;

export const selectPollenIds = (state: RootState) => state.pollen.ids;

export const selectPollenByCategory = (state: RootState, categoryId: number) => state.pollen.ids.filter((id) => state.pollen.entities[id]?.categoryId === categoryId);
export const selectPollenById = (state: RootState, id: number) => state.pollen.entities[id];
