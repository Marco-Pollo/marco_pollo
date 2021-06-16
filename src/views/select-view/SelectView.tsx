import React, {memo} from 'react';
import CategoriesTabs from '../../components/categories-tabs/CategoriesTabs';

const SelectView = () => (
    <CategoriesTabs/>
);

SelectView.displayName = 'SelectView';

export default memo(SelectView);
