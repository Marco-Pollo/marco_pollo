import React, { memo } from 'react';
import Header from '../../components/header/Header';
import { Typography } from '@material-ui/core';
import './homeView.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SecondPage from './second-page/SecondPage';

const HomeView = () => {
    const secondPage = React.createRef<HTMLDivElement>();

    return (
        <div className='home-view'>
            <Header />
            <div className='home-view__view-port home-view__view-port--home'>
                <Typography variant='h2' align='center' className='home-view__headline'>
                    MarcoPollo to empower your daily life
                </Typography>
                <div
                    onClick={() => {
                        if (secondPage && secondPage.current) {
                            secondPage.current.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
                        }
                    }}
                    className='home-view__view-port--scroll-down'
                >
                    <ExpandMoreIcon />
                </div>
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
