import React, { memo } from 'react';
import Header from '../../components/header/Header';
import Calendar from '../../components/calendar/Calendar';
import Score from '../../components/score/Score';

const ResultView = () => (
    <>
        <Header />
        <Calendar />
        <Score />
    </>
);

ResultView.displayName = 'ResultView';

export default memo(ResultView);
