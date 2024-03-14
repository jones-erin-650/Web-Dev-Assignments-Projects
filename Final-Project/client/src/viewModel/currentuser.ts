// this will be imported to get the current user
import { ref } from "vue";
import type { User } from "@/model/User";
import type { Workout } from "@/model/Workout";

// currentUser is declared here

const currentUser = ref()

// undefined by default
console.log("If there's no user logged in this is undefined: " + currentUser.value)

// in oder to use curretUser in other files you need to import this function that returns the variable

export const refCurrentUser = () =>  currentUser


export const setRefCurrentUser = (input: User) => {
    currentUser.value = input
    console.log("currentUser in currentuser.ts " + currentUser)
    console.log("value: " + currentUser.value)
    console.log("name: " + currentUser.value.firstName)
}

// appends inputted workout to the current user's workout array
export const addWorkout = (newWorkout: Workout) => {
  currentUser.value.userWorkouts.push(newWorkout)
} 

// replaces the data of a specific workout
export const editWorkout = (newWorkout: Workout) => {
  
}