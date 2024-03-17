export interface Workout {
    date: {
        year: number,
        month: number,
        day: number,
        hours: number,
        minutes: number,
        seconds: number,
    },
    distance: number,
    distanceUnit: string,
    duration: number,
    durationUnit: string,
    location: string,
    workoutID: number,
    picture: string,
    text: string,
}