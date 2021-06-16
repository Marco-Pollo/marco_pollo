import React, { FunctionComponent } from 'react';
import './app.scss';
import Content from './Content';

const App: FunctionComponent<Record<string, never>> = () => {
    return (
        <div className='app'>
            <Content />
        </div>
    );
};

App.displayName = 'App';

export default App;
