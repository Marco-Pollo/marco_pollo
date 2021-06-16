import React, { memo } from 'react';
import Header from '../../components/header/Header';

const ResultView = () => (
    <>
        <Header />
        <p>Result</p>
    </>
);

ResultView.displayName = 'ResultView';

export default memo(ResultView);
