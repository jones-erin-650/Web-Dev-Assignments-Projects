export interface Workout {
    coordinates: {
        lat: number,
        lng: number
    }
    distance: number,
    distanceUnit: string,
    duration: number,
    durationUnit: string,
    postId: number,
    picture: string,
    text: string,
    user: string,
}