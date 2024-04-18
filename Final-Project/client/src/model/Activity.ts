import type { User } from "./User";

export interface Activity {
    date: string,
    distanceFeet: number,
    distanceMiles: number,
    durationHours: number,
    durationMinutes: number,
    location: string,
    activityID: number,
    picture: string,
    text: string,
    originalPoster: string
}