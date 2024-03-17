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
    date: {
        year: 0,
        month: 0,
        day: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
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
    // need to make a way to make a new id that's the last index's one +1

    currentUser.value.userWorkouts.push(input)

    // after the workout is added the newWorkout object should be cleared out for the next workout to be added
    setEmptyWorkout()
  } 
  
  // replaces the data of a specific workout
  // should take the newWorkout in and replace every orgiinalWorkout value spot with it, everything except the date and id
  export const editWorkout = (originalWorkout: Workout, newWorkout: Workout) => {
    // the original Id needs to be preserved 
    const originalID = originalWorkout.workoutID
    
    // has its information replaced
    originalWorkout = newWorkout
    console.log("Original Workout: " + originalWorkout)

    // workout's id is preserved
    originalWorkout.workoutID = originalID
  }

  export function deleteActivity(user : User | null, workout : Workout) {
    if (!user) {
        console.error("User is null");
        return;
      }
    
      const index = data.findIndex(u => u.id === user.id);
      if (index === -1) {
        console.error("User not found");
        return;
      }
    
      const userActivities = data[index].activities;
      const activityIndex = userActivities.findIndex(a => a.workoutID === workout.workoutID);
    
      if (activityIndex === -1) {
        console.error("Activity not found");
        return;
      }
    
      // Delete the activity from the user's activities array
      userActivities.splice(activityIndex, 1);
}