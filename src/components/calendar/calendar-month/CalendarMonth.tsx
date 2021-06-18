import React, {
 FunctionComponent, memo, useEffect, useState
} from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Container } from '@material-ui/core';
import { addDays, endOfMonth, startOfMonth } from 'date-fns';
import { useSelector } from 'react-redux';
import { iCalendarMonth } from '../../../types/interfaces';
import { GetScoreForDay } from '../../../utils/pollen';
import { selectUserPollen } from '../../../redux-modules/user-settings/userSettingsSelectors';
import { selectPollen } from '../../../redux-modules/pollen/pollenSelectors';
import { Score } from '../../../types/pollen';

type LocalValues = { date: string, score?: Score };

const CalendarMonth: FunctionComponent<iCalendarMonth> = ({ month, year }) => {
    const userSelection = useSelector(selectUserPollen);
    const pollen = useSelector(selectPollen);

    const date = new Date(`${year}-${month}-01`);

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
        const start = startOfMonth(date).getDate();
        const end = endOfMonth(date).getDate();
        const vals = [] as Array<LocalValues>;

        for (let i = start; i <= end; i++) {
            const currentDay = new Date(`${year}-${month}-${i < 10 ? `0${i}` : i}`);
            vals.push({
                date: `${year}-${month}-${i < 10 ? `0${i}` : i}`,
                score: selection?.length ? undefined : GetScoreForDay(selection, currentDay)
            });
        }
        setValues(vals);
    }, [date]);

    return (
        <Container
            maxWidth="xs"
        >
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
                titleForValue={(value) => value?.date}
                values={values}
                classForValue={(value) => {
                    if (!value) {
                        return 'pollen-field pollen-color-empty';
                    }
                    return `pollen-field pollen-color-${value.score}`;
                }}
                transformDayElement={(element, value) => React.cloneElement(element, {
                    // eslint-disable-next-line max-len
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
                    title: value?.date?.toString() || '', rx: 2, ry: 2
                })}
            />
        </Container>
    );
};

CalendarMonth.displayName = 'CalendarMonth';

export default memo(CalendarMonth);
