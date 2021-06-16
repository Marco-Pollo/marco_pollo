import React, { memo } from 'react';
import { Tabs, Tab } from '@material-ui/core';

const CategoriesTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <Tabs
                value={value}
                indicatorColor="primary"
                onChange={handleChange}
            >
                <Tab label="Show all"/>
                <Tab label="Trees"/>
                <Tab label="Flowers"/>
                <Tab label="Insects"/>
            </Tabs>
        </div>
    );
};

CategoriesTabs.displayName = 'CategoriesTabs';

export default memo(CategoriesTabs);
