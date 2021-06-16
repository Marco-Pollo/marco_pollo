import React, { FunctionComponent, useState } from 'react';
import './calendar.scss';
import { DatePicker } from '@material-ui/pickers';

const Calendar: FunctionComponent<Record<string, never>> = () => {
    const [score, setScore] = useState<number>(0);

    return (
        <div className='pollen-score'>
            {score}
        </div>
    );
};

Calendar.displayName = 'Calendar';

export default Calendar;
