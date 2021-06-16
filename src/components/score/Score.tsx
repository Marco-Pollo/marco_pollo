import React, { FunctionComponent, useState } from 'react';
import './score.scss';
import { Typography } from '@material-ui/core';

const Score: FunctionComponent<Record<string, never>> = () => {
    const [score, setScore] = useState<number>(11);

    return (
        <div className="pollen-score">
            <Typography
                className="pollen-score_number"
                variant="h2"
            >
                {score}
            </Typography>
            <Typography
                className="pollen-score_text"
                variant="h5"
            >
                Score
            </Typography>
        </div>
    );
};

Score.displayName = 'Calendar';

export default Score;
