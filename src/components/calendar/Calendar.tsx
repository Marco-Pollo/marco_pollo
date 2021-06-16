import React, { FunctionComponent, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import './calendar.scss';

const Calendar: FunctionComponent<Record<string, never>> = () => {
    const [date, setDate] = useState<MaterialUiPickersDate>(new Date());

    return (
        <div className="pollen-calendar">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    disableToolbar
                    variant="static"
                    value={date}
                    onChange={setDate}
                    renderDay={
                        (day, selectedDate, dayInCurrentMonth, dayComponent) => {
                            return dayComponent;
                        }
                    }
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};

Calendar.displayName = 'Calendar';

export default Calendar;
