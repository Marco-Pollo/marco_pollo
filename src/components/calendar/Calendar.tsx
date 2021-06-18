import React, { FunctionComponent, useEffect, useState } from 'react';
import './calendar.scss';
import { addMonths } from 'date-fns';
import CalendarMonth from './calendar-month/CalendarMonth';

const Calendar: FunctionComponent = () => {
    const [months, setMonths] = useState<Array<{ month: number, year: number }>>([]);

    useEffect(() => {
        let lDate = new Date();
        const lMonths = [] as Array<{ month: number, year: number }>;
        for (let i = 0; i < 12; i++) {
            lMonths.push({ month: lDate.getMonth() + 1, year: lDate.getFullYear() });
            lDate = addMonths(lDate, 1);
        }
        setMonths(lMonths);
    }, []);

    return (
        <>
            <div className="pollen-calendar">
                {months.map((month) => (
                    <CalendarMonth
                        month={month.month}
                        year={month.year}
                    />
                ))}
            </div>
        </>
    );
};

Calendar.displayName = 'Calendar';

export default Calendar;
