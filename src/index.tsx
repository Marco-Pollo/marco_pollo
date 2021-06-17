import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import theme from './constants/theme';
import store from './redux-modules/store';
import { loadCategories } from './redux-modules/categories/categoriesActions';
import { loadPollen } from './redux-modules/pollen/pollenActions';
import CssBaseline from '@material-ui/core/CssBaseline';
import { loadUserSettings } from './redux-modules/user-settings/userSettingsActions';
import './index.scss';

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Provider store={store}>
                    <App />
                </Provider>
            </MuiThemeProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

const init = () => {
    render();

    store.dispatch(loadCategories());
    store.dispatch(loadPollen());
    store.dispatch(loadUserSettings());

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
};

init();
