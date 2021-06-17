import React, { memo } from 'react';
import Header from '../../components/header/Header';

const AboutView = () => (
    <>
        <Header />
        <p>About</p>
    </>
);

AboutView.displayName = 'AboutView';

export default memo(AboutView);
