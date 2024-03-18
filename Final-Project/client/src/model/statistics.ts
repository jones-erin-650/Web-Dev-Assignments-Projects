// a collection of functions related to calculating statistics about the current user's recent workouts
import type { User } from "./User";
import type { Workout } from "./Workout";


// functions to get activities within a certain time period
export function getTodaysWorkouts(user: User) {
  const userWorkouts = user.userWorkouts

  //   for this we only care about the year, month and day, so we splice the rest, cut everything after the day
  //   format: YYYY-MM-DDTZH:MM.SS.SSS
  const d = new Date();
  const currentDate = d.toISOString().slice(0, 10);

  //   filter out the userWorkouts and only return the ones with today's date
  // Filter activities for the current day
  return user.userWorkouts.filter(workout => workout.date === currentDate)
}

export function getWeeksWorkouts(user: User) {
  
}

export function getTotalDistance(workouts: Workout[]) {

}

export function getAveragePace(workouts: Workout[]) {

}

export function getTotalDuration(workouts: Workout[]) {

}

export function getTotalCalories(workouts: Workout[]) {

}