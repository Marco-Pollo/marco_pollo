import React, {
 FunctionComponent, memo, useEffect, useState
} from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Container, Typography } from '@material-ui/core';
import {
 addDays, endOfMonth, format, startOfMonth
} from 'date-fns';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { de } from 'date-fns/locale';
import { iCalendarMonth } from '../../../types/interfaces';
import { GetScoreForDay } from '../../../utils/pollen';
import { selectUserPollen } from '../../../redux-modules/user-settings/userSettingsSelectors';
import { selectPollen } from '../../../redux-modules/pollen/pollenSelectors';
import { Score } from '../../../types/pollen';

type LocalValues = { date: string, score?: Score };

const CalendarMonth: FunctionComponent<iCalendarMonth> = ({ month, year }) => {
    const userSelection = useSelector(selectUserPollen);
    const pollen = useSelector(selectPollen);

    const date = new Date(`${year}-${month < 10 ? `0${month}` : month}-01`);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [values, setValues] = useState<Array<LocalValues>>([]);
    const [selection, setSelection] = useState(userSelection.map((id) => pollen.entities[id]!));

    useEffect(() => {
        if (userSelection && pollen?.entities) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setSelection(userSelection.map((id) => pollen.entities[id]!));
        }
    }, [pollen, userSelection]);

    useEffect(() => {
        const localDate = new Date(`${year}-${month < 10 ? `0${month}` : month}-01`);
        const start = startOfMonth(localDate).getDate();
        const end = endOfMonth(localDate).getDate();
        const vals = [] as Array<LocalValues>;

        for (let i = start; i <= end; i++) {
            const currentDay = new Date(`${year}-${month < 10 ? `0${month}` : month}-${i < 10 ? `0${i}` : i}`);
            vals.push({
                date: `${year}-${month}-${i < 10 ? `0${i}` : i}`,
                score: selection?.length ? GetScoreForDay(selection, currentDay) : undefined
            });
        }
        setValues(vals);
    }, [month, year, selection]);
    console.debug(values);

    return (
        <Container
            maxWidth="xs"
        >
            <Typography
                variant="h2"
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
                values={values}
                classForValue={(value) => {
                    if (!value?.score?.score) {
                        return 'pollen-field pollen-color-empty';
                    }
                    return `pollen-field pollen-color-${(value.score.hard.score && 3)
                                                        || (value.score.mild.score && 2)
                                                        || (value.score.light.score && 1)}`;
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
