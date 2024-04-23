import data from "../../../server/data/users.json";
import type { Activity } from "./Activity";

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  handle: string,
  email: string,
  profilePicture: string,
  isAdmin: boolean,
  
}
  
// gets the data out of the user.json file and returns an array of users
export function getUsers(): User[] {
  return data.items;
}


// this code should probably be moved to a folder in viewmodel

// input a user and get a return of their activity array
export const getUserActivities = (user: User) => user.userActivities


export function getTodaysActivities(user: User) {
  //   for this we only care about the year, month and day, so we splice the rest, cut everything after the day
  //   format: YYYY-MM-DDTZH:MM.SS.SSS
  const d = new Date();
  const currentDate = d.toISOString().slice(0, 10);

  //   filter out the userActivities and only return the ones with today's date
  // Filter activities for the current day
  const filteredActivities =  user.userActivities.filter(activity => activity.date.slice(0, 10) === currentDate)
  return filteredActivities
}

export function getUserFromHandle(handle: String) {
  const usersArray = getUsers()
  const filteredUsers = data.items.find(item => item.handle === handle);
  return filteredUsers
}

const handleTest = getUserFromHandle("@eribrin")

console.log("getUserFromHandle test: " + handleTest?.firstName);