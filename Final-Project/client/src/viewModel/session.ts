// this will be imported to get the current user
import { reactive, ref } from "vue";
import type { User } from "@/model/User";
import * as myFetch from "@/model/myFetch";


const session  = reactive({
    user: null as User | null,
    isLoading: 0,
});


// currentUser is declared here

const currentUser = ref()

// in oder to use curretUser in other files you need to import this function that returns the variable

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


export function logOut() {
    currentUser.value = undefined
}

export function api<T>(action: string, data?: unknown, method?: string){
    session.isLoading++;
    return myFetch.api<T>(action, data, method)
    .then(x=>{
        if(!x.isSuccess){
            console.error("api function failed");
        }
        return x;
    })
    // .catch( showError = () => {
    //     console.error("api function failed")
    // } )
    .finally(() => session.isLoading--);
}