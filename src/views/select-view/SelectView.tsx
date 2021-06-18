import React, { memo } from 'react';
import CategoriesTabs from '../../components/categories-tabs/CategoriesTabs';
import Header from '../../components/header/Header';
import FloatingButton from '../../components/floating-button/FloatingButton';

const SelectView = () => (
    <>
        <Header />
        <CategoriesTabs />
        <FloatingButton/>
    </>
);

SelectView.displayName = 'SelectView';

export default memo(SelectView);
