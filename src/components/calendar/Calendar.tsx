import React, { FunctionComponent, useState } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import './calendar.scss';
import { useDispatch } from 'react-redux';
import { actionCalcScore } from '../../redux-modules/working-data/workingDataActions';
import CalendarMonth from './calendar-month/CalendarMonth';

const Calendar: FunctionComponent = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState<MaterialUiPickersDate>(new Date());

    const handleChange = (value: MaterialUiPickersDate) => {
        setDate(value);
        dispatch(actionCalcScore(value as Date));
    };
    return (
        <>
            <div className="pollen-calendar">
                <CalendarMonth
                month={6}
                year={2021}
                />
            </div>
        </>
    );
};

Calendar.displayName = 'Calendar';

export default Calendar;
