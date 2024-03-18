import data from "../data/users.json";
import type { Workout } from "./Workout";
import { refCurrentUser } from "@/viewModel/currentuser";
import { ref } from "vue";


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


// this is a workout object that can be called and edited when a new workout is being made

// necessary to add to the current user's workout array
const currentUser = refCurrentUser()

// export const refNewWorkout
export const newWorkout = ref()

// to import to other files
export const refNewWorkout = () => newWorkout

// 
export const setRefNewWorkout = (input: Workout) => {
  newWorkout.value = input
}

// this is used to make a new workout that has empty values for all its fields; made so that the files that import the newWorkout object don't have to make an empty workout themselves
export const setEmptyWorkout = () => {
  const workoutToSetNewWorkout: Workout = {
    date: '0000-00-00:00:00.00.000',
    distance: 0,
    distanceUnit: '',
    duration: 0,
    durationUnit: '',
    location: '',
    workoutID: 0,
    picture: '',
    text: '',
  }
  // replaces the current newWorkout value with the empty one
  setRefNewWorkout(workoutToSetNewWorkout)
}

// appends inputted workout to the current user's workout array
export const addWorkout = (input: Workout) => {
  // first need to get the last element of the array to take that workoutID and make a new ID from it
  const last = currentUser.value.userWorkouts[currentUser.value.userWorkouts.length - 1];
  input.workoutID = last.workoutID+1

  // need to create a new date for the workout
  const d = new Date();
  input.date = d.toISOString();

  // adds new workout to array
  currentUser.value.userWorkouts.push(input)

  // after the workout is added the newWorkout object should be cleared out for the next workout to be added
  setEmptyWorkout()
} 
  
  // replaces the data of a specific workout
  // should take the newWorkout in and replace every orgiinalWorkout value spot with it, everything except the date and id
  export const editWorkout = (user: User, originalWorkout: Workout, newWorkout: Workout) => {
    // the original Id needs to be preserved 
    const originalID = originalWorkout.workoutID
    
    // first finds the index of the user in the original data.items array
    const index = data.items.findIndex(u => u.id === user?.id);

    // then finds the index of the original workout in that user's workoutArray
    const workoutIndex = data.items[index].userWorkouts.findIndex(a => a.workoutID === originalWorkout.workoutID)

    // replaces the value at that index with the new workout
    data.items[index].userWorkouts[workoutIndex] = newWorkout

    // preserve the original id
    data.items[index].userWorkouts[workoutIndex].workoutID = originalID
    
  }

  export function deleteWorkout(user : User | null, workout : Workout) {
    // finds the index of the index of the original workout according to the user id, then splices it
    const index = data.items.findIndex(u => u.id === user?.id);
    const workoutIndex = data.items[index].userWorkouts.findIndex(a => a.workoutID === workout.workoutID);
    data.items[index].userWorkouts.splice(workoutIndex, 1);
}