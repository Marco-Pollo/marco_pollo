import React, { memo } from 'react';
import CategoriesTabs from '../../components/categories-tabs/CategoriesTabs';
import Header from '../../components/header/Header';
import FloatingButton from '../../components/floating-button/FloatingButton';
import { useAppSelector } from '../../redux-modules/hooks';
import { selectUserPollen } from '../../redux-modules/user-settings/userSettingsSelectors';

const SelectView = () => {
    const userSelection = useAppSelector(selectUserPollen);
    return (
        <>
            <Header />
            <CategoriesTabs />
            {userSelection?.length && (<FloatingButton />)}
        </>
    );
};

SelectView.displayName = 'SelectView';

export default memo(SelectView);
