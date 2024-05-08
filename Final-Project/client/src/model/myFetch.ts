// communicates with the server

import type { DataEnvelope } from "./transportTypes";


// export const API_ROOT = import.meta.env.VITE_API_ROOT;
export const API_ROOT = 'https://localhost:3000'
// hardcoded for now till i figure out the environment variables


export function rest(url: string, data?: unknown, method?: string){
    return fetch(url, {
        method: method ?? (data ? "POST" : "GET"),
        headers: {
            "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
    })
    .then(x => x.json())
}

// goes to the address defined by api_root
export function api<T>(action: string, data?: unknown, method?: string): Promise<DataEnvelope<T>>{
    return rest(`${API_ROOT}/${action}`, data, method);
}