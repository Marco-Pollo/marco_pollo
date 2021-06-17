import React, { memo } from 'react';
import Header from '../../components/header/Header';
import './homeView.scss';
import SecondPage from './second-page/SecondPage';
import FirstPage from './first-page/FirstPage';

const HomeView = () => {
    const secondPage = React.createRef<HTMLDivElement>();

    return (
        <div className='home-view'>
            <Header />
            <div className='home-view__view-port home-view__view-port--home'>
                <FirstPage secondPage={secondPage} />
            </div>
            <div ref={secondPage} className='home-view__view-port'>
                <div className='home-view__button-container'>
                    <SecondPage />
                </div>
            </div>
        </div>
    );
};

HomeView.displayName = 'HomeView';

export default memo(HomeView);
