import data from "../data/users.json";

export interface User {
    id: number,
    firstName: string,
    userName: string,
    isAdmin: boolean,
    userWorkouts: []
  }
  