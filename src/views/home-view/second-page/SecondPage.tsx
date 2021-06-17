import React, { memo } from 'react';
import LearnMoreButton from '../../../components/learn-more-button/LearnMoreButton';
import GetStartedButton from '../../../components/get-started-button/GetStartedButton';
import '../homeView.scss';
import './secondPage.scss';

const SecondPage = () => (
    <div className='second-page'>
        <div className='home-view__button'>
            <LearnMoreButton />
        </div>
        <div className='home-view__button'>
            <GetStartedButton />
        </div>
    </div>
);

SecondPage.displayName = 'SecondPage';

export default memo(SecondPage);
