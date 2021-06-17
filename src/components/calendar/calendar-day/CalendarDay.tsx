import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import {
    createStyles,
    IconButton,
    Theme, withStyles,
    WithStyles
} from '@material-ui/core';
import { format } from 'date-fns';
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
}));
interface DayProps extends WithStyles<typeof styles> {
    day: MaterialUiPickersDate;
    selectedDate: MaterialUiPickersDate;
    dayInCurrentMonth: boolean;
}

const CalendarDay: FunctionComponent<DayProps> = ({
    day,
    selectedDate,
    dayInCurrentMonth,
    classes,
}) => {
    const userSelection = useSelector(selectUserPollen);
    const pollen = useSelector(selectPollen);

    const score = GetScoreForDay(userSelection.map((id) => pollen.entities[id]!), day as Date);
    const wrapperClassNameLight = clsx({
        /* @ts-expect-error no plan */
        [classes.highlight]: score.light.isBetween,
        /* @ts-expect-error no plan */
        [classes.firstHighlight]: score.light.onStart,
        /* @ts-expect-error no plan */
        [classes.endHighlight]: score.light.onEnd,
        /* @ts-expect-error no plan */
        [classes.light]: score.light.isBetween,
    });
    const wrapperClassNameMild = clsx({
        /* @ts-expect-error no plan */
        [classes.highlight]: score.mild.isBetween,
        /* @ts-expect-error no plan */
        [classes.firstHighlight]: score.mild.onStart,
        /* @ts-expect-error no plan */
        [classes.endHighlight]: score.mild.onEnd,
        /* @ts-expect-error no plan */
        [classes.mild]: score.mild.isBetween,
    });
    const wrapperClassNameHard = clsx({
        /* @ts-expect-error no plan */
        [classes.highlight]: score.hard.isBetween,
        /* @ts-expect-error no plan */
        [classes.firstHighlight]: score.hard.onStart,
        /* @ts-expect-error no plan */
        [classes.endHighlight]: score.hard.onEnd,
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
        <div className={wrapperClassNameLight}>
            <div className={wrapperClassNameMild}>
                <div className={wrapperClassNameHard}>
                    <IconButton className={dayClassName}>
                        <span>{format(day as Date, 'd')}</span>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(CalendarDay);