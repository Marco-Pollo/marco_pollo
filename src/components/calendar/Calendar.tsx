import React, { FunctionComponent, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import './calendar.scss';
import CalendarDay from './calendar-day/CalendarDay';

const Calendar: FunctionComponent = () => {
    const [date, setDate] = useState<MaterialUiPickersDate>(new Date());

    const handleChange = (value: MaterialUiPickersDate) => {
        setDate(value);
    };
    return (
        <div className="pollen-calendar">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    disableToolbar
                    variant="static"
                    value={date}
                    onChange={handleChange}
                    renderDay={(day, selectedDate, dayInCurrentMonth) => (
                        <CalendarDay
                            day={day}
                            selectedDate={selectedDate}
                            dayInCurrentMonth={dayInCurrentMonth}
                        />
                    )}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};

Calendar.displayName = 'Calendar';

export default Calendar;
