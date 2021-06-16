import React, { memo } from 'react';
import { Button } from '@material-ui/core';

const LearnMoreButton = () => (
    <div>
        <Button variant="contained" color="secondary" href="about">
            Learn More
        </Button>
    </div>
);

LearnMoreButton.displayName = 'LearnMoreButton';

export default memo(LearnMoreButton);
