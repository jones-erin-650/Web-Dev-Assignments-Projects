import data from "../data/users.json";

export interface User {
  id: number,
  firstName: string,
  lastName: string,
  userName: string,
  isAdmin: boolean,
  profilePicture: string,
  userWorkouts: []
}
  
export function getUsers(): User[] {
  return data.items;
}