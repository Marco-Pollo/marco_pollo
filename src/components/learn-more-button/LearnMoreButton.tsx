import React, { memo } from 'react';
import { Button } from '@material-ui/core';

const LearnMoreButton = () => (
    <Button
        variant='contained'
        color='secondary'
        href='about'
        fullWidth={true}
    >
        Learn More
    </Button>
);

LearnMoreButton.displayName = 'LearnMoreButton';

export default memo(LearnMoreButton);
