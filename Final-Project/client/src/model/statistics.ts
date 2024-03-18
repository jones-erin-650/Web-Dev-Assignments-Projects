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
  // THIS IS MOST LIKELY TEMPORARY; it would be much better to use a preexisting library for this

  // get the current day (0-7)
  const currentDate = new Date()
  const currentDay = currentDate.getDay()

  // Calculate the start date of the week (Sunday)
    const startDate = new Date(currentDate);
    startDate.setDate(startDate.getDate() - currentDay);

  // Calculate the end date of the week (Saturday)
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 6);

  // filter the current week out of the workout array
  // Filter activities for the current week
  return user.userWorkouts.filter(workout => {
    const workoutDate = new Date(workout.date);
    return workoutDate >= startDate && workoutDate <= endDate;
});
}

export function getTotalDistance(workouts: Workout[]) {

}

export function getAveragePace(workouts: Workout[]) {

}

export function getTotalDuration(workouts: Workout[]) {
  // adds all the hours together, then add all the minutes together and convert them to hours
  let totalHours = 0
  let totalMinutes = 0

  for (let i = 0; i < workouts.length; i++) {
    totalHours += workouts[i].durationHours
    totalMinutes += workouts[i].durationMinutes
  }
  
  // convert minutes to hours
  totalMinutes /= 60

  totalHours += totalMinutes


  return totalHours
  
}

export function getTotalCalories(workouts: Workout[]) {

}