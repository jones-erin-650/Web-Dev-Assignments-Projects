// this will be imported to get the current user
import { ref } from "vue";
import type { User } from "@/model/User";

// currentUser is declared here

const currentUser = ref()

// in oder to use curretUser in other files you need to import this function that returns the variable

export const refCurrentUser = () => currentUser
