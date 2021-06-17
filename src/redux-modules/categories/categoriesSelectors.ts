// export state

import { RootState } from '../store';

export const selectCategories = (state: RootState) => state.categories.entities;
export const selectCategoryFetchState = (state: RootState) => state.categories.fetchState;

export const selectCategoryIds = (state: RootState) => state.categories.ids;
export const selectCategoryById = (state: RootState, id: number) => state?.categories.entities[id];
