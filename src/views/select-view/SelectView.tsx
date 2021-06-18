import React, { memo } from 'react';
import CategoriesTabs from '../../components/categories-tabs/CategoriesTabs';
import Header from '../../components/header/Header';
import FloatingButton from '../../components/floating-button/FloatingButton';
import { useAppSelector } from '../../redux-modules/hooks';
import { selectUserPollen } from '../../redux-modules/user-settings/userSettingsSelectors';
import Footer from '../../components/waves/footer-wave/Footer';

const SelectView = () => {
    const userSelection = useAppSelector(selectUserPollen);
    return (
        <>
            <Header backgroundColor="black" />
            <CategoriesTabs />
            {userSelection?.length && (<FloatingButton />)}
            <Footer/>
        </>
    );
};

SelectView.displayName = 'SelectView';

export default memo(SelectView);
