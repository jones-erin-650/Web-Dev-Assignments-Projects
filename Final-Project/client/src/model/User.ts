import data from "../../../server/data/users.json";
import type { Activity } from "./Activity";

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  profilePicture: string,
  isAdmin: boolean,
  userActivities: Activity[]
  
}
  
// gets the data out of the user.json file and returns an array of users
export function getUsers(): User[] {
  return data.items;
}


// this code should probably be moved to a folder in viewmodel

// input a user and get a return of their activity array
export const getUserActivities = (user: User) => user.userActivities


// this is a activity object that can be called and edited when a new activity is being made

