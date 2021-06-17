import React, { FunctionComponent, useState } from 'react';
import { useSelector } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import './calendar.scss';
import {
    createStyles, IconButton, Theme, WithStyles, withStyles
} from '@material-ui/core';
import clsx from 'clsx';
import { format } from 'date-fns';
import { selectPollen } from '../../redux-modules/pollen/pollenSelectors';
import { GetScoreForDay } from '../../utils/pollen';

const styles = createStyles((theme: Theme) => ({
    dayWrapper: {
        position: 'relative',
    },
    day: {
        width: 36,
        height: 36,
        fontSize: theme.typography.caption.fontSize,
        margin: '0 2px',
        color: 'inherit',
    },
    customDayHighlight: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: '2px',
        right: '2px',
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: '50%',
    },
    nonCurrentMonthDay: {
        color: theme.palette.text.disabled,
    },
    highlightNonCurrentMonthDay: {
        color: '#676767',
    },
    highlight: {
    },
    firstHighlight: {
        extend: 'highlight',
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
    },
    endHighlight: {
        extend: 'highlight',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    },
    light: {
        background: 'yellow',
        color: theme.palette.common.white,
    },
    mild: {
        background: 'orange',
        color: theme.palette.common.white,
    },
    hard: {
        background: 'red',
        color: theme.palette.common.white,
    },
}));
type CalProps = WithStyles<typeof styles>;

const Calendar: FunctionComponent<CalProps> = (props) => {
    const [date, setDate] = useState<MaterialUiPickersDate>(new Date());
    const pollen = useSelector(selectPollen);

    const handleChange = (value: MaterialUiPickersDate) => {
        setDate(value);
    };
    const renderDay = (
        day: MaterialUiPickersDate,
        selectedDate: MaterialUiPickersDate,
        dayInCurrentMonth: boolean,
        dayComponent: Element
    ) => {
        const { classes } = props;
        const score = GetScoreForDay(pollen.ids.map((id) => pollen.entities[id]!), day as Date);
        const wrapperClassName = clsx({
            /* @ts-expect-error no plan */
            [classes.highlight]: score.light.isBetween || score.mild.isBetween || score.hard.isBetween,
            /* @ts-expect-error no plan */
            [classes.firstHighlight]: score.light.onStart || score.mild.onStart || score.hard.onStart,
            /* @ts-expect-error no plan */
            [classes.endHighlight]: score.light.onEnd || score.mild.onEnd || score.hard.onEnd,
            /* @ts-expect-error no plan */
            [classes.light]: score.light.isBetween,
            /* @ts-expect-error no plan */
            [classes.mild]: score.mild.isBetween,
            /* @ts-expect-error no plan */
            [classes.hard]: score.hard.isBetween,
        });
        /* @ts-expect-error no plan */
        const dayClassName = clsx(classes.day, {
            /* @ts-expect-error no plan */
            [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
            /* @ts-expect-error no plan */
            [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && score.light.isBetween,
        });

        return (
            <div className={wrapperClassName}>
                <IconButton className={dayClassName}>
                    <span>{format(day as Date, 'd')}</span>
                </IconButton>
            </div>
        );
    };

    return (
        <div className="pollen-calendar">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    disableToolbar
                    variant="static"
                    value={date}
                    onChange={handleChange}
                    /* @ts-expect-error no plan */
                    renderDay={renderDay}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};

Calendar.displayName = 'Calendar';

export default withStyles(styles)(Calendar);
