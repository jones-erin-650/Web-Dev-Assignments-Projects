// this will be imported to get the current user
import type { User } from "@/model/User";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import * as myFetch from "@/model/myFetch";


// currentUser is declared here

const session  = reactive({
    user: null as User | null,
    isLoading: 0,
});


// in oder to use curretUser in other files you need to import this function that returns the variable

export const refSession = () =>  session


export function useLogin() {
    const router = useRouter();
    return {
        async login(user: User) {
            const x = await api<User>("users/login", user);
            if(x){
                session.user = x.data;
                router.push("/");
            }
        },
        logout() {
            session.user = null;
            router.push("/login");
        }
    };
}

export function api<T>(action: string, data?: unknown, method?: string){
    session.isLoading++;
    return myFetch.api<T>(action, data, method)
    .then(x=>{
        if(!x.isSuccess){
            // showError(x);
            console.log("error: " + x);
        }
        return x;
    })
    // should show an error on the catch
    .catch()
    .finally(() => session.isLoading--);
}