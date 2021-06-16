import React, { FunctionComponent, useState } from 'react';
import './calendar.scss';
import { DatePicker } from '@material-ui/pickers';

const Calendar: FunctionComponent<Record<string, never>> = () => {
    const [date, setDate] = useState<Date>(new Date());

    return (
        <div className='pollen-calendar'>
            <DatePicker
                variant="static"
                value={date}
                onChange={setDate}
            />
        </div>
    );
};

Calendar.displayName = 'Calendar';

export default Calendar;
