import data from "../data/users.json";
import type { Workout } from "./Workout";


export interface User {
  id: number,
  firstName: string,
  lastName: string,
  userName: string,
  email: string,
  profilePicture: string,
  isAdmin: boolean,
  userWorkouts: Workout[]
  
}
  
// gets the data out of the user.json file and returns an array of users
export function getUsers(): User[] {
  return data.items;
}


// this code should probably be moved to a folder in viewmodel

// input a user and get a return of their workout array
export const getUserWorkouts = (user: User) => user.userWorkouts

