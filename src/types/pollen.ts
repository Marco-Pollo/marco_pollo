export type Pollen = {
    id: number,
    name: string,
    categoryId: number,
    image: string,
    times: {
        light: TimeSpan,
        mild: TimeSpan,
        strong: TimeSpan
    },
};
export type TimeSpan = {
    start: string,
    end: string,
};
