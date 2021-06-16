/* eslint-disable no-console */
import React, { JSXElementConstructor } from 'react';
import ReactDOM from 'react-dom';
import logger from 'chayns-logger';
import { Provider } from 'react-redux';
import { ErrorBoundary, showWaitCursor } from 'chayns-helper';
import chaynsHelperInit from './utils/init/chaynsHelper';
import App from './components/App';
import pkg from '../package.json';
import chaynsLoggerInit from './utils/init/logger/logger';
import store from './redux-modules/store';
import { Package } from './utils/init/types';

const {
    project,
    version
} = pkg as Package;

const {
    externalName,
    subproject
} = project;

const render = (Component: JSXElementConstructor<Record<string, never>>) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
    ReactDOM.render(
        <ErrorBoundary>
            <Provider store={store}>
                <Component/>
            </Provider>
        </ErrorBoundary>,
        document.getElementById('app')
    );
};

const init = () => {
    try {
        void chayns.ready.then(async () => {
            const hideWaitCursor = showWaitCursor({ action: 'Initialization' });
            try {
                chaynsLoggerInit();
                await chaynsHelperInit();
                // Console log e.g. "MyProject v1.0.0 (1.1.2021, 18:00)" to identify which version actually loaded
                const date = new Date(process.env.BUILD_DATE as string);
                console.log(
                    // eslint-disable-next-line max-len
                    `${externalName}${subproject ? ` ${subproject}` : ''} v${version} (${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()})`
                );
                render(App);
            } catch (e) {
                console.error('[Index] Critical error on app startup', e);
                logger.critical({
                    message: '[Index] Critical error on app startup',
                    data: { errorType: (e as Error)?.name },
                    section: 'index.js'
                }, e);
            } finally {
                hideWaitCursor();
            }
        });
    } catch (err) {
        console.error('[Index] chayns environment could not be initialized', err);
    }
};

init();
