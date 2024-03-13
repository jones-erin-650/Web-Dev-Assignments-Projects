import data from "../data/users.json";
import type { Workout } from "./Workout";


export interface User {
  id: number,
  firstName: string,
  lastName: string,
  userName: string,
  isAdmin: boolean,
  profilePicture: string,
  userWorkouts: Workout[]
  email: string,
}
  
// gets the data out of the user.json file and returns an array of users
export function getUsers(): User[] {
  return data.items;
}
