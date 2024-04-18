// this will be imported to get the current user
import { ref } from "vue";
import type { User } from "@/model/User";
import type { Activity } from "@/model/Activity";

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

export const logOut = () => {
    currentUser.value = undefined
}
export const getCurrentUserActivities = () => currentUser.value.userActivities