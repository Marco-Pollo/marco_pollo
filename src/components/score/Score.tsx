import React, { FunctionComponent, useState } from 'react';
import './score.scss';

const Score: FunctionComponent<Record<string, never>> = () => {
    const [score, setScore] = useState<number>(0);

    return (
        <div className="pollen-score">
            {score}
        </div>
    );
};

Score.displayName = 'Calendar';

export default Score;
