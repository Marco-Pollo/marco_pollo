// export state

import { RootState } from '../store';

export const selectCategories = (state: RootState) => state.categories;
export const selectCategoryById = (state: RootState, id: number) => state?.categories.entities[id];
