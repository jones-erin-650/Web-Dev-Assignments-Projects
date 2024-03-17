import { ref } from "vue";
import type { Workout } from "@/model/Workout";
import { refCurrentUser } from "./currentuser";
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
    postId: 0,
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
    const originalID = originalWorkout.postId
    
    // has its information replaced
    originalWorkout = newWorkout
    console.log("Original Workout: " + originalWorkout)

    // workout's id is preserved
    originalWorkout.postId = originalID
  }
  