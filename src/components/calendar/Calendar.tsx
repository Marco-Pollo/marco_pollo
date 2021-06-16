import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import './calendar.scss';
import { selectPollen } from '../../redux-modules/pollen/pollenSelectors';
import { GetScoreForDay } from '../../utils/pollen';

const Calendar: FunctionComponent<Record<string, never>> = () => {
    const [date, setDate] = useState<MaterialUiPickersDate>(new Date());
    const pollen = useSelector(selectPollen);

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
                            const score = GetScoreForDay(pollen.ids.map((id) => pollen.entities[id]!), day as Date);
                            const v = score.score / score.pollen;

                            if (v < 2)
                                dayComponent.props.style = { ...dayComponent.props.style, backgroundColor: 'yellow' };
                            else if (v < 3)
                                dayComponent.props.style = { ...dayComponent.props.style, backgroundColor: 'orange' };
                            else
                                dayComponent.props.style = { ...dayComponent.props.style, backgroundColor: 'red' };

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
