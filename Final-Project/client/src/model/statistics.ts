// a collection of functions related to calculating statistics about the current user's recent activities
import type { User } from "./User";
import type { Activity } from "./Activity";
import { getUserActivities } from "./User";

// functions to get activities within a certain time period
export function getTodaysActivities(userActivities: Activity[]) {
  //   for this we only care about the year, month and day, so we splice the rest, cut everything after the day
  //   format: YYYY-MM-DDTZH:MM.SS.SSS
  const d = new Date();
  const currentDate = d.toISOString().slice(0, 10);

  //   filter out the userActivities and only return the ones with today's date
  // Filter activities for the current day
  const filteredActivities =  userActivities.filter(activity => activity.date.slice(0, 10) === currentDate)
  return filteredActivities
}

export function getWeeksActivities(userActivities: Activity[]) {
  // THIS IS MOST LIKELY TEMPORARY; it would be much better to use a preexisting library for this

// get the current day of the week 0-7
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); 

  // calculate start and end of week
  const startDate = new Date(currentDate);
  startDate.setDate(startDate.getDate() - currentDay);

  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);


  // Filter Activities between start and end date
  return userActivities.filter(activity => {
      const activityDate = new Date(activity.date);
      return activityDate >= startDate && activityDate <= endDate;
  });
}

export function getTotalDistance(activities: Activity[]) {
  let totalMiles = 0
  let totalFeet = 0
  for (let i = 0; i < activities.length; i++) {
    totalMiles += activities[i].distanceMiles
    totalFeet += activities[i].distanceFeet
  } 
  

  // convert feet to miles
  totalFeet /= 5280

  totalMiles += totalFeet

  return totalMiles
}

export function getAveragePace(distance: number, time: number) {
  // speed = distance/time (yes i had to look this up I AM TIRED)

  // just to avoid divide by 0 errors
  if(time === 0) {
    return 0
  }

  return distance / time
}

export function getTotalDuration(activities: Activity[]) {
  // adds all the hours together, then add all the minutes together and convert them to hours
  let totalHours = 0
  let totalMinutes = 0
  for (let i = 0; i < activities.length; i++) {
    totalHours += activities[i].durationHours
    totalMinutes += activities[i].durationMinutes

  }
  
  
  // convert minutes to hours
  totalMinutes /= 60

  totalHours += totalMinutes


  return totalHours
  
}

export function getTotalCalories(activities: Activity[]) {

}