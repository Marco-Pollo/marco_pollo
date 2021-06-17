import React, { FunctionComponent } from 'react';
import './score.scss';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectScore } from '../../redux-modules/working-data/workingDataSelectors';

const Score: FunctionComponent<Record<string, never>> = () => {
    const score = useSelector(selectScore);

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
