import React, { memo } from 'react';
import { Button } from '@material-ui/core';

const GetStartedButton = () => (
    <Button
        variant='contained'
        color='primary'
        href='select'
        fullWidth={true}
    >
        Get Started
    </Button>
);

GetStartedButton.displayName = 'GetStartedButton';

export default memo(GetStartedButton);
