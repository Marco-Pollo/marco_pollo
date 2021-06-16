import React, { memo } from 'react';
import { Button } from '@material-ui/core';

const GetStartedButton = () => (
    <div>
        <Button variant="contained" color="primary" href="select">
            Get Started
        </Button>
    </div>
);

GetStartedButton.displayName = 'GetStartedButton';

export default memo(GetStartedButton);
