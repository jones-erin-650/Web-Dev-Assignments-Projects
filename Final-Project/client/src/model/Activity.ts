import type { User } from "./User";
import { refCurrentUser } from "@/viewModel/currentuser";
import { ref } from "vue"
import data from "../../../server/data/users.json";


export interface Activity {
    date: string,
    distanceFeet: number,
    distanceMiles: number,
    durationHours: number,
    durationMinutes: number,
    location: string,
    activityID: number,
    picture: string,
    text: string,
    originalPoster: string
}

// necessary to add to the current user's activity array
const currentUser = refCurrentUser()

// export const refNewActivity
export const newActivity = ref()

// to import to other files
export const refNewActivity = () => newActivity

// 
export const setRefNewActivity = (input: Activity) => {
  newActivity.value = input
}

// this is used to make a new activity that has empty values for all its fields; made so that the files that import the newActivity object don't have to make an empty activity themselves
export const setEmptyActivity = () => {
  const activityToSetNewActivity: Activity = {
    date: '0000-00-00:00:00',
    distanceFeet: 0,
    distanceMiles: 0,
    durationHours: 0,
    durationMinutes: 0,
    location: '',
    activityID: 0,
    picture: '',
    text: '',
    originalPoster: ''
  }
  // replaces the current newActivity value with the empty one
  setRefNewActivity(activityToSetNewActivity)
}

// appends inputted activity to the current user's activity array
export const addActivity = (input: Activity) => {
  // first need to get the last element of the array to take that activityID and make a new ID from it
  const last = currentUser.value.userActivities[currentUser.value.userActivities.length - 1];
  input.activityID = last.activityID+1

  // need to create a new date for the activity
  const d = new Date();
  input.date = d.toISOString();

  // adds new activity to array
  currentUser.value.userActivities.push(input)

  // after the activity is added the newActivity object should be cleared out for the next activity to be added
  setEmptyActivity()
} 
  
  // replaces the data of a specific activity
  // should take the newActivity in and replace every orgiinalActivity value spot with it, everything except the date and id
  export const editActivity = (user: User, originalActivity: Activity, newActivity: Activity) => {
    // the original Id needs to be preserved 
    const originalID = originalActivity.activityID
    
    // first finds the index of the user in the original data.items array
    const index = data.items.findIndex(u => u.id === user?.id);

    // then finds the index of the original activity in that user's activityArray
    const activityIndex = data.items[index].userActivities.findIndex(a => a.activityID === originalActivity.activityID)

    // replaces the value at that index with the new activity
    data.items[index].userActivities[activityIndex] = newActivity

    // preserve the original id
    data.items[index].userActivities[activityIndex].activityID = originalID
    
  }

  export function deleteActivity(user : User | null, activity : Activity) {
    // finds the index of the index of the original activity according to the user id, then splices it
    const index = data.items.findIndex(u => u.id === user?.id);
    const activityIndex = data.items[index].userActivities.findIndex(a => a.activityID === activity.activityID);
    data.items[index].userActivities.splice(activityIndex, 1);
}