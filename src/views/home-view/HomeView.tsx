import React, { memo } from 'react';
import LearnMoreButton from '../../components/learn-more-button/LearnMoreButton';
import GetStartedButton from '../../components/get-started-button/GetStartedButton';
import Header from '../../components/header/Header';

const HomeView = () => (
    <div>
        <Header/>
        <LearnMoreButton />
        <GetStartedButton />
    </div>
);

HomeView.displayName = 'HomeView';

export default memo(HomeView);
