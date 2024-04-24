import userData from "../../../server/data/users.json";
import activityData from "../../../server/data/activities.json";
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
  
// gets the userData out of the user.json file and returns an array of users
export function getUsers(): User[] {
  return userData.items;
}

// input a user and get a return of their activity array
export function getUserActivities(user: User) {
  return activityData.items.filter( (item) =>  item.originalPoster === user.handle)
}

// this code should probably be moved to a folder in viewmodel

export function getUserFromHandle(handle: String) {
  const usersArray = getUsers()
  const filteredUsers = userData.items.find(item => item.handle === handle);
  return filteredUsers
}

const handleTest = getUserFromHandle("@eribrin")

console.log("getUserFromHandle test: " + handleTest?.firstName);