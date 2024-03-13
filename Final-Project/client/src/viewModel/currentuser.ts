// this will be imported to get the current user
import { ref } from "vue";
import type { User } from "@/model/User";

// currentUser is declared here

const currentUser = ref()

// in oder to use curretUser in other files you need to import this function that returns the variable

export const refCurrentUser = () => {
    return currentUser
}

export const setRefCurrentUser = (input: User) => {
    currentUser.value = input
    console.log("currentUser in currentuser.ts " + currentUser)
    console.log("value: " + currentUser.value)
    console.log("name: " + currentUser.value.firstName)
}