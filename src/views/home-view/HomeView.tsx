import React, { memo } from 'react';
import Header from '../../components/header/Header';
import './homeView.scss';
import SecondPage from './second-page/SecondPage';
import FirstPage from './first-page/FirstPage';
import Footer from '../../components/waves/footer-wave/Footer';

const HomeView = () => {
    const secondPage = React.createRef<HTMLDivElement>();

    return (
        <div className="home-view">
            <Header />
            <FirstPage secondPage={secondPage} />
            <div ref={secondPage}>
                <SecondPage />
            </div>
            <Footer/>
        </div>
    );
};

HomeView.displayName = 'HomeView';

export default memo(HomeView);
