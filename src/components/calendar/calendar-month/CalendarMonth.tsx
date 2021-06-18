import React, { FunctionComponent, memo, useEffect, useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Container, Typography } from '@material-ui/core';
import { addDays, endOfMonth, format, isSameMonth, startOfMonth } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { de } from 'date-fns/locale';
import { iCalendarMonth } from '../../../types/interfaces';
import { GetScoreForDay } from '../../../utils/pollen';
import { selectUserPollen } from '../../../redux-modules/user-settings/userSettingsSelectors';
import { selectPollen } from '../../../redux-modules/pollen/pollenSelectors';
import { Score } from '../../../types/pollen';
import { actionCalcScore } from '../../../redux-modules/working-data/workingDataActions';

type LocalValues = { date: string, score?: Score };

const CalendarMonth: FunctionComponent<iCalendarMonth> = ({ month, year }) => {
    const dispatch = useDispatch();
    const userSelection = useSelector(selectUserPollen);
    const pollen = useSelector(selectPollen);

    const yearMonth = `${year}-${month < 10 ? `0${month}` : month}`;
    const date = new Date(`${yearMonth}-01`);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [values, setValues] = useState<Array<LocalValues>>([]);
    const [selection, setSelection] = useState(userSelection.map((id) => pollen.entities[id]!));
    const [selectedDate, setSelectedDate] = useState(
        isSameMonth(date, new Date()) ? `${yearMonth}-${new Date().getDate()
                                                        < 10 ? `0${new Date().getDate()}` : new Date().getDate()}` : ''
    );

    useEffect(() => {
        if (userSelection && pollen?.entities) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setSelection(userSelection.map((id) => pollen.entities[id]!));
        }
    }, [pollen, userSelection]);

    useEffect(() => {
        const localDate = new Date(`${yearMonth}-01`);
        const start = startOfMonth(localDate).getDate();
        const end = endOfMonth(localDate).getDate();
        const vals = [] as Array<LocalValues>;

        for (let i = start; i <= end; i++) {
            const currentDay = new Date(`${yearMonth}-${i < 10 ? `0${i}` : i}`);
            vals.push({
                date: `${yearMonth}-${i < 10 ? `0${i}` : i}`,
                score: selection?.length ? GetScoreForDay(selection, currentDay) : undefined
            });
        }
        setValues(vals);
    }, [month, year, selection]);

    return (
        <Container
            maxWidth='xs'
        >
            <Typography
                variant='h2'
            >
                {format(date, 'MMMM', { locale: de })}
            </Typography>
            <CalendarHeatmap
                showMonthLabels={false}
                showWeekdayLabels={false}
                showOutOfRangeDays={false}
                horizontal={false}
                startDate={endOfMonth(addDays(date, -1))}
                endDate={endOfMonth(date)}
                tooltipDataAttrs={(value?: LocalValues) => ({
                    'data-tip': value?.date || ''
                })}
                onClick={(event) => {
                    setSelectedDate(event.date);
                    dispatch(actionCalcScore(new Date(event.date)));
                }}
                values={values}
                classForValue={(value) => {
                    let classNames = 'pollen-field';
                    if (!value?.score?.score) {
                        classNames += ' pollen-field pollen-color-empty';
                    } else {
                        classNames += ` pollen-field pollen-color-${(value.score.hard.score && 3)
                                                                    || (value.score.mild.score && 2)
                                                                    || (value.score.light.score && 1)}`;
                    }
                    if (value?.date === selectedDate) {
                        classNames += ' pollen-field--selected';
                    }
                    return classNames;
                }}
                transformDayElement={(element) => React.cloneElement(element, {
                    rx: 2,
                    ry: 2
                })}
            />
            <ReactTooltip />
        </Container>
    );
};

CalendarMonth.displayName = 'CalendarMonth';

export default memo(CalendarMonth);
