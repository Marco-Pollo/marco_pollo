import React, { FunctionComponent, useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import './calendar.scss';
import { useDispatch } from 'react-redux';
import CalendarDay from './calendar-day/CalendarDay';
import { actionCalcScore } from '../../redux-modules/working-data/workingDataActions';

const Calendar: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState<MaterialUiPickersDate>(new Date());

    const handleChange = (value: MaterialUiPickersDate) => {
        setDate(value);
        dispatch(actionCalcScore(value as Date));
    };
    return (
        <div className="pollen-calendar">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    disableToolbar
                    variant="static"
                    value={date}
                    onChange={() => {}}
                    renderDay={(day, selectedDate, dayInCurrentMonth) => (
                        <CalendarDay
                            day={day}
                            selectedDate={selectedDate}
                            dayInCurrentMonth={dayInCurrentMonth}
                            handleChange={handleChange}
                        />
                    )}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};

Calendar.displayName = 'Calendar';

export default Calendar;
