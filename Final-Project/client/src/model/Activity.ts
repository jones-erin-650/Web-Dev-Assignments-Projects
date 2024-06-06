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
export async function addActivity(activity: Activity) {
  await api(`activities/${session.user!.handle}`, activity, 'POST')
  
} 
export async function editActivity(activity: Activity, originalActivityId: Number) {
  // originalActivityId isn't undefined and is passed in right
  console.log('editActivity() called, originalActivityId: ' + originalActivityId);
  await api(`activities/${originalActivityId}`, activity, 'PATCH')
  
} 
  
  
  export async function deleteActivity(activityId : number) {
    console.log('deleteActivity() called: ' + activityId);
    await api(`activities/${activityId}`, null, "DELETE");
  }