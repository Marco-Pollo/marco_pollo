import React, { memo, useState } from 'react';
import { Container, Tab, Tabs } from '@material-ui/core';
import { EntityId } from '@reduxjs/toolkit';
import { useAppSelector } from '../../redux-modules/hooks';
import { selectCategories, selectCategoryIds } from '../../redux-modules/categories/categoriesSelectors';
import CategoryTabPanel from './categories-panel/CategoryTabPanel';
import { useStyles } from '../../constants/styles';

const CategoriesTabs = () => {
    const categories = useAppSelector(selectCategories);
    const categoryIds = useAppSelector(selectCategoryIds);

    const { categoryContainer } = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <div>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    onChange={handleChange}
                >
                    <Tab
                        label="Show all"
                    />
                    {categoryIds?.map((id: EntityId | number) => (<Tab label={categories[id]?.name || ''} />))}
                </Tabs>
            </div>
            <Container className={categoryContainer} maxWidth="md">
                <CategoryTabPanel
                    label="Show all"
                    categoryId={0}
                    index={0}
                    value={value}
                />
                {categoryIds?.map((id: EntityId | number, index: number) => (
                    <CategoryTabPanel
                        categoryId={id as number}
                        index={index + 1}
                        value={value}
                    />
                ))}
            </Container>
        </>
    );
};

CategoriesTabs.displayName = 'CategoriesTabs';

export default memo(CategoriesTabs);
