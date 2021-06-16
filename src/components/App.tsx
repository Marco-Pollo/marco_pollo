import { CenteredWaitCursor } from 'chayns-helper';
import React, { FunctionComponent, useEffect } from 'react';
import './app.scss';
import { fetchBoard } from '../redux-modules/board/boardActions';
import { selectBoardMeta } from '../redux-modules/board/boardSelectors';
import Content from './Content';
import { useAppComparingSelector, useAppDispatch } from '../redux-modules/hooks';

const App: FunctionComponent<Record<string, never>> = () => {
    const { isLoading } = useAppComparingSelector(selectBoardMeta);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBoard());
        if (chayns.env.isMobile) {
            chayns.addOnActivateListener(() => {
                dispatch(fetchBoard());
            });
        }
    }, [dispatch]);

    return (
        <div className="app">
            {
                !isLoading
                    ? <Content/>
                    : <CenteredWaitCursor/>
            }
        </div>
    );
};

App.displayName = 'App';

export default App;
