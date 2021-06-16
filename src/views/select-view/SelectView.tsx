import React, { memo } from 'react';
import CategoriesTabs from '../../components/categories-tabs/CategoriesTabs';
import Header from '../../components/header/Header';

const SelectView = () => (
    <>
        <Header />
        <CategoriesTabs />
    </>
);

SelectView.displayName = 'SelectView';

export default memo(SelectView);
