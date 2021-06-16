import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from './store';

export interface TypedUseComparingSelectorHook<TState> {
    <TSelected>(
        selector: (state: TState) => TSelected,
    ): TSelected;
}

// already typed versions of the react-redux hooks to avoid importing the respective types everywhere
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
