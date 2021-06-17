import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import {
    createStyles,
    IconButton,
    Theme, withStyles,
    WithStyles
} from '@material-ui/core';
import { format, startOfWeek, endOfWeek, isSameDay } from 'date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { useSelector } from 'react-redux';
import { GetScoreForDay } from '../../../utils/pollen';
import { selectUserPollen } from '../../../redux-modules/user-settings/userSettingsSelectors';
import { selectPollen } from '../../../redux-modules/pollen/pollenSelectors';

const styles = createStyles((theme: Theme) => ({
    dayWrapper: {
        position: 'relative',
    },
    day: {
        width: 36,
        height: 32,
        fontSize: theme.typography.caption.fontSize,
        margin: '0 2px',
        color: 'inherit',
    },
    customDayHighlight: {
        borderRadius: '12px',
        backgroundColor: 'rgba(205,205,205,0.50)',
        '&:hover': {
            backgroundColor: 'rgba(205,205,205,0.50)',
        },
    },
    nonCurrentMonthDay: {
        color: theme.palette.text.disabled,
    },
    highlightNonCurrentMonthDay: {
        color: '#797979', // #ff8181
    },
    highlight: {
    },
    firstHighlight: {
        extend: 'highlight',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
    },
    endHighlight: {
        extend: 'highlight',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
    },
    light: {
        background: 'yellow',
        margin: '2px 0',
        color: theme.palette.common.black,
    },
    mild: {
        background: 'orange',
        color: theme.palette.common.white,
    },
    hard: {
        background: 'red',
        color: theme.palette.common.white,
    },
    startOfWeek: { },
    endOfWeek: { }
}));
interface DayProps extends WithStyles<typeof styles> {
    day: MaterialUiPickersDate;
    selectedDate: MaterialUiPickersDate;
    dayInCurrentMonth: boolean;
    handleChange: Function;
}

const CalendarDay: FunctionComponent<DayProps> = ({
    day,
    selectedDate,
    dayInCurrentMonth,
    handleChange,
    classes,
}) => {
    const userSelection = useSelector(selectUserPollen);
    const pollen = useSelector(selectPollen);

    const score = GetScoreForDay(userSelection.map((id) => pollen.entities[id]!), day as Date);
    const wrapperClassNameLight = clsx({
        /* @ts-expect-error no plan */
        [classes.highlight]: score.light.isBetween,
        /* @ts-expect-error no plan */
        [classes.firstHighlight]: score.light.onStart || isSameDay(startOfWeek(day), day),
        /* @ts-expect-error no plan */
        [classes.endHighlight]: score.light.onEnd || isSameDay(endOfWeek(day), day),
        /* @ts-expect-error no plan */
        [classes.light]: score.light.isBetween,
    });
    const wrapperClassNameMild = clsx({
        /* @ts-expect-error no plan */
        [classes.highlight]: score.mild.isBetween,
        /* @ts-expect-error no plan */
        [classes.firstHighlight]: score.mild.onStart || isSameDay(startOfWeek(day), day),
        /* @ts-expect-error no plan */
        [classes.endHighlight]: score.mild.onEnd || isSameDay(endOfWeek(day), day),
        /* @ts-expect-error no plan */
        [classes.mild]: score.mild.isBetween,
    });
    const wrapperClassNameHard = clsx({
        /* @ts-expect-error no plan */
        [classes.highlight]: score.hard.isBetween,
        /* @ts-expect-error no plan */
        [classes.firstHighlight]: score.hard.onStart || isSameDay(startOfWeek(day), day),
        /* @ts-expect-error no plan */
        [classes.endHighlight]: score.hard.onEnd || isSameDay(endOfWeek(day), day),
        /* @ts-expect-error no plan */
        [classes.hard]: score.hard.isBetween,
    });
    /* @ts-expect-error no plan */
    const dayClassName = clsx(classes.day, {
        /* @ts-expect-error no plan */
        [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
        /* @ts-expect-error no plan */
        [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && (score.light.isBetween && !score.mild.isBetween && !score.hard.isBetween),
        /* @ts-expect-error no plan */
        [classes.customDayHighlight]: selectedDate.getTime() === day.getTime(),
    });

    return (
        <div className={wrapperClassNameLight}>
            <div className={wrapperClassNameMild}>
                <div className={wrapperClassNameHard}>
                    <IconButton className={dayClassName} onClick={() => handleChange(day)}>
                        <span>{format(day as Date, 'd')}</span>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(CalendarDay);
