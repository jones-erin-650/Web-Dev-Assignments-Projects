import userData from "../../../server/data/users.json";
import activityData from "../../../server/data/activities.json";
import { ref } from "vue";
import { api } from "../viewModel/session";

// importing user data from the server


export interface User {
  id: number,
  firstName: string,
  lastName: string,
  handle: string,
  email: string,
  profilePicture: string,
  isAdmin: boolean,
  
}

// this is just a simple way to get an empty user template to add and edit new users
export const newUser = ref()
// to import to other files
export const refNewUser = () => newUser
// 
export const setRefNewUser = (input: User ) => {
  newUser.value = input
}

export const setEmptyUser = () => {
  const activityToSetNewUser: User = {
    id: 0,
    firstName: '',
    lastName: '',
    handle: '',
    email: '',
    profilePicture: '',
    isAdmin: false,
  }
  // replaces the current newActivity value with the empty one
  setRefNewUser(activityToSetNewUser)
}
  
//sends a request to the server to return the users from the json files
export function getUsers() {
  console.log('get users test: ' + api<User[]>('users'));
  return api<User[]>('users/');
}

// input a user and get a return of their activity array
export function getUserActivities(user: User) {
  return activityData.items.filter( (item) =>  item.originalPoster === user.handle)
}

// this code should probably be moved to a folder in viewmodel

export function getUserFromHandle(handle: String) {
  const filteredUsers = userData.items.find(item => item.handle === handle);
  return filteredUsers
}

const handleTest = getUserFromHandle("@eribrin")

console.log("getUserFromHandle test: " + handleTest?.firstName);

export function addUser(input: User){
  const last = userData.items[userData.items.length - 1];
  input.id = last.id+1
  userData.items.push(input)
  setEmptyUser()
}

export const editUser = (originalUser: User, newUser: User) => {
    // the original Id needs to be preserved 
    const originalID = originalUser.id

    // replaces the value at that index with the new activity
    userData.items[originalID-1] = newUser
    // preserve the original id
    userData.items[originalID-1].id = originalID
    
  }

export function deleteUser(index: number) {
    userData.items.splice(index, 1);
}