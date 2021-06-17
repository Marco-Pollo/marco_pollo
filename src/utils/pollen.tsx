import { Pollen } from '../types/pollen';

export const GetScoreForDay = (pollen: Array<Pollen>, day: Date): {
    light: {
        onStart: boolean,
        onEnd: boolean,
        isBetween: boolean,
    },
    mild:{
        onStart: boolean,
        onEnd: boolean,
        isBetween: boolean,
    },
    hard:{
        onStart: boolean,
        onEnd: boolean,
        isBetween: boolean,
    },
} => {
    const copyDate = new Date(day);
    copyDate.setHours(12, 0, 0, 0);
    copyDate.setFullYear(1970, copyDate.getMonth(), copyDate.getDate());

    const lightBorder = { onStart: false, onEnd: false, isBetween: false };
    const mildBorder = { onStart: false, onEnd: false, isBetween: false };
    const hardBorder = { onStart: false, onEnd: false, isBetween: false };

    pollen.forEach((p) => {
        const light = GetDatePosition(p.times.light.start, p.times.light.end, copyDate);
        const mild = GetDatePosition(p.times.light.start, p.times.light.end, copyDate);
        const hard = GetDatePosition(p.times.light.start, p.times.light.end, copyDate);
        if (light.onStart) lightBorder.onStart = true;
        if (light.onEnd) lightBorder.onEnd = true;
        if (light.isBetween) lightBorder.isBetween = true;
        if (mild.onStart) mildBorder.onStart = true;
        if (mild.onEnd) mildBorder.onEnd = true;
        if (mild.isBetween) mildBorder.isBetween = true;
        if (hard.onStart) hardBorder.onStart = true;
        if (hard.onEnd) hardBorder.onEnd = true;
        if (hard.isBetween) hardBorder.isBetween = true;
    });

    return {
        light: lightBorder,
        mild: mildBorder,
        hard: hardBorder,
    };
};
const GetDatePosition = (start: string, end: string, date: Date):
    { isBetween: boolean, onStart: boolean, onEnd: boolean } => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    return {
        isBetween: date >= startDate && date <= endDate,
        onEnd: endDate === date,
        onStart: startDate === date,
    };
};
