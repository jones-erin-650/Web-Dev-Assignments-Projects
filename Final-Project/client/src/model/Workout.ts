export interface Workout {
    coordinates: {
        lat: number,
        lng: number
    }
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
    postId: number,
    picture: string,
    text: string,
}