import { Pollen } from '../types/pollen';

export const GetScoreForDay = (pollen: Array<Pollen>, day: Date): { score: number, pollen: number } => {
    let score = 0;
    let pollenCount = 0;
    pollen.forEach((p) => {
        console.log('PPP', p, score, pollenCount);
        const light = IsBetweenDays(p.times.light.start, p.times.light.end, day);
        const mild = IsBetweenDays(p.times.light.start, p.times.light.end, day);
        const hard = IsBetweenDays(p.times.light.start, p.times.light.end, day);
        // @ts-expect-error it's faster
        score += (light && 1) + (mild && 2) + (hard && 3);
        // @ts-expect-error it's faster
        pollenCount += light || mild || hard;
        console.log('PPP_A', p, score, pollenCount);
    });
    return { score, pollen: pollenCount };
};
const IsBetweenDays = (start: string, end: string, day: Date): boolean => {
    const startDate = new Date(start),
          endDate = new Date(end);
    const startMonth = startDate.getMonth(),
          startDay = startDate.getDate(),
          endMonth = endDate.getMonth(),
          endDay = endDate.getDate(),
          currentMonth = day.getMonth(),
          currentDay = day.getDate();

    if (currentMonth >= startMonth && currentMonth <= endMonth) {
        if (currentMonth === startMonth)
            return currentDay >= startDay;
        if (currentMonth === endMonth)
            return currentDay <= endDay;
        return true;
    }

    return false;
};
