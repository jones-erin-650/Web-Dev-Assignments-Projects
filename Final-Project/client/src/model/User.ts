import userData from "../../../server/data/users.json";
import { onMounted, ref } from "vue";
import { api } from "../viewModel/session";
import { getActivities, type Activity } from "./Activity";

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
  // first get all the activities
  const activities = ref([] as Activity[]);
  onMounted(async () => {
  try {
    const activityResponse = await getActivities();
    activities.value = activityResponse!.data;
  } catch (error: any) {
    console.error('Error loading activities:', error.message);
  }
})

  // then filter them according to the user handle
  const filteredActivities = activities.value.filter( (item) =>  item.originalPoster === user.handle)
  console.log('filtered activities: ' + JSON.stringify(filteredActivities));
  return filteredActivities
}

// this code should probably be moved to a folder in viewmodel

export async function getUserFromHandle(handle: String) {
  try {
    const response = await api(`users/${handle}`, null, "GET");

    console.log('getUserFromHandle response: ' + JSON.stringify(response));

    return response;
  } catch (error) {
      throw new Error('Failed to fetch user by handle');
  }
}


// this works as both add and edit user, this simplifies handling the functions for the modals
export async function addUser(user: User){
  // check if the user already exist, if it does then the input is patched in to edit the server data
  const existingUserResponse = await api<User>(`users/${user.handle}`);
  const existingUserEnvelope = await existingUserResponse;

  // edit the user if it already exists
  if (existingUserEnvelope!.isSuccess) {
    const updateUserResponse = await api<User>(`users/${user.id}`, user, "PATCH");

    // Check if the update was successful
    if (!updateUserResponse!.isSuccess) {
        throw new Error(updateUserResponse!.message || 'Failed to update user data');
    }
  } else {
      // If the user doesn't exist, add it
      const addUserResponse = await api<User>("users", user, "POST");

    // Check if the addition was successful
    if (!addUserResponse!.isSuccess) {
        throw new Error(addUserResponse!.message || 'Failed to add user');
    }
  }
}

export async function deleteUser(userId: number) {
  await api(`users/${userId}`, null, "GET");
}