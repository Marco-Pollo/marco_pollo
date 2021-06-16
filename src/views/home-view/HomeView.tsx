import React, { memo } from 'react';
import LearnMoreButton from '../../components/learn-more-button/LearnMoreButton';
import GetStartedButton from '../../components/get-started-button/GetStartedButton';
import Header from '../../components/header/Header';
import { Typography } from '@material-ui/core';
import './homeView.scss';

const HomeView = () => (
    <div className='home-view'>
        <Header />
        <div className='home-view__view-port home-view__view-port--home'>
            <Typography variant='h2' align='center' className='home-view__headline'>
                MarcoPollo to empower your daily life
            </Typography>
        </div>
        <div className='home-view__view-port'>
            <div className='home-view__button-container'>
                <div className='home-view__button'>
                    <LearnMoreButton />
                </div>
                <div className='home-view__button'>
                    <GetStartedButton />
                </div>
            </div>
        </div>
    </div>
);

HomeView.displayName = 'HomeView';

export default memo(HomeView);
