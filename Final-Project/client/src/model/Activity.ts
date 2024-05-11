import {  type User } from "./User";
import { api, refSession } from "@/viewModel/session";
import { ref } from "vue"
import activityData from "../../../server/data/activities.json";
// import { DataEnvelope } from "./transportTypes";

export interface Activity {
    date: string,
    distanceFeet: number,
    distanceMiles: number,
    durationHours: number,
    durationMinutes: number,
    location: string,
    id: number,
    picture: string,
    text: string,
    originalPoster: string
}

// necessary to add to the current user's activity array
const session = refSession()
const currentUser = session.user

// export const refNewActivity
export const newActivity = ref()
// to import to other files
export const refNewActivity = () => newActivity
// 
export const setRefNewActivity = (input: Activity) => {
  newActivity.value = input
}
// this is a activity object that can be called and edited when a new activity is being made
// this is used to make a new activity that has empty values for all its fields; made so that the files that import the newActivity object don't have to make an empty activity themselves
export const setEmptyActivity = () => {
  const activityToSetNewActivity: Activity = {
    date: '0000-00-00:00:00',
    distanceFeet: 0,
    distanceMiles: 0,
    durationHours: 0,
    durationMinutes: 0,
    location: '',
    id: 0,
    picture: '',
    text: '',
    originalPoster: ''
  }
  // replaces the current newActivity value with the empty one
  setRefNewActivity(activityToSetNewActivity)
}
//sends a request to the server to return the users from the json files
export function getActivities() {
  return api<Activity[]>('activities/');
}
// appends inputted activity to the current user's activity array
export async function addActivity(activity: Activity) {
  // check if the user already exist, if it does then the input is patched in to edit the server data
  const existingActivityResponse = await api<Activity>(`activities/${activity.id}`);
  const existingActivityEnvelope = await existingActivityResponse;

  // edit the user if it already exists
  if (existingActivityEnvelope!.isSuccess) {
    const updateActivityResponse = await api<Activity>(`activities/${activity.id}`, activity, "PATCH");

    // Check if the update was successful
    if (!updateActivityResponse!.isSuccess) {
        throw new Error(updateActivityResponse!.message || 'Failed to update activity data');
    }
  } else {
      // If the user doesn't exist, add it
      const addActivityResponse = await api<User>("activities", activity, "POST");

    // Check if the addition was successful
    if (!addActivityResponse!.isSuccess) {
        throw new Error(addActivityResponse!.message || 'Failed to add activity');
    }
  }
} 
  
  
  export async function deleteActivity(activity : Activity) {
    await api(`activity/${activity.id}`, null, "DELETE");
}