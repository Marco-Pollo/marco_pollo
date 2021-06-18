import React, { memo } from 'react';
import Header from '../../components/header/Header';
import Calendar from '../../components/calendar/Calendar';
import Score from '../../components/score/Score';
import Footer from '../../components/waves/footer-wave/Footer';
import ResultText from './result-text/ResultText';

const ResultView = () => (
    <>
        <Header />
        <ResultText/>
        <Calendar />
        <Score />
        <Footer/>
    </>
);

ResultView.displayName = 'ResultView';

export default memo(ResultView);
