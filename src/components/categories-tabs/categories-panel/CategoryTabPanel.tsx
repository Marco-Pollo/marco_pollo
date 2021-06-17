import React, { FunctionComponent, memo } from 'react';
import { Box, Grid } from '@material-ui/core';
import { EntityId } from '@reduxjs/toolkit';
import { iCategoryTab } from '../../../types/interfaces';
import { useAppSelector } from '../../../redux-modules/hooks';
import { selectCategoryById } from '../../../redux-modules/categories/categoriesSelectors';
import { selectPollenByCategory, selectPollenIds } from '../../../redux-modules/pollen/pollenSelectors';
import PollenItem from './pollen-item/PollenItem';
import './categoryTabPanel.scss';

const CategoryTabPanel: FunctionComponent<iCategoryTab> = ({
 categoryId, label, value, index, children, ...other
}) => {
    const category = useAppSelector((state) => selectCategoryById(state, categoryId));
    const pollen = useAppSelector(
        (state) => (
            category
                ? selectPollenByCategory(state, categoryId)
                : selectPollenIds(state))
    );

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    p={3}
                    className="category-panel"
                >
                    <Grid
                        container
                        spacing={2}
                    >
                        {pollen?.map((id: EntityId | number) => (<PollenItem id={id as number} />))}
                    </Grid>
                </Box>
            )}
        </div>
    );
};

CategoryTabPanel.displayName = 'CategoryTab';

export default memo(CategoryTabPanel);
