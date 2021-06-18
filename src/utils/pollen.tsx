import { Pollen, Score } from '../types/pollen';

// eslint-disable-next-line import/prefer-default-export
export const GetScoreForDay = (pollen: Array<Pollen>, day: Date): Score => {
    const copyDate = new Date(Date.UTC(1970, day.getMonth(), day.getDate(), 12, 0, 0, 0));

    let score = 0;
    const light = {
        score: 0
    };
    const mild = {
        score: 0
    };
    const hard = {
        score: 0
    };

    pollen.forEach((p) => {
        const lightPos = GetDatePosition(p.times.light.start, p.times.light.end, copyDate);
        const mildPos = GetDatePosition(p.times.mild.start, p.times.mild.end, copyDate);
        const hardPos = GetDatePosition(p.times.strong.start, p.times.strong.end, copyDate);

        light.score += lightPos.isBetween as unknown as number && 1;
        mild.score += mildPos.isBetween as unknown as number && 2;
        hard.score += hardPos.isBetween as unknown as number && 3;
        /* @ts-expect-error it's beautiful */
        score += (hardPos.isBetween && 3) || (mildPos.isBetween && 2) || (lightPos.isBetween && 1);
    });

    return {
        score,
        light,
        mild,
        hard
    };
};
const GetDatePosition = (start: string, end: string, date: Date):
    { isBetween: boolean } => {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const dateTime = date.getTime();

    return {
        isBetween: dateTime >= startDate && dateTime <= endDate
    };
};
