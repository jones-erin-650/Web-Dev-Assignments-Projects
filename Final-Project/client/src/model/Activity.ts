import type { User } from "./User";
import { refCurrentUser } from "@/viewModel/session";
import { ref } from "vue"
import userData from "../../../server/data/users.json";
import activityData from "../../../server/data/activities.json";



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
const currentUser = refCurrentUser()

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


// appends inputted activity to the current user's activity array
export const addActivity = (input: Activity) => {
  // first need to get the last element of the array to take that id and make a new ID from it
  const last = activityData.items[activityData.items.length - 1];
  input.id = last.id+1

  // need to create a new date for the activity
  const d = new Date();
  input.date = d.toISOString();
  
  // set the originalPoster to the currentUser
  input.originalPoster = currentUser.value.handle

  // adds new activity to array of activities
  activityData.items.push(input)


  // after the activity is added the newActivity object should be cleared out for the next activity to be added
  setEmptyActivity()
} 
  
  // replaces the userData of a specific activity
  // should take the newActivity in and replace every orgiinalActivity value spot with it, everything except the date and id
  export const editActivity = (user: User, originalActivity: Activity, newActivity: Activity) => {
    // the original Id needs to be preserved 
    const originalID = originalActivity.id
    
    // first finds the index of the user in the original userData.items array
    const index = userData.items.findIndex(u => u.id === user?.id);

    // then finds the index of the original activity in that user's activityArray
    const activityIndex = userData.items[index].userActivities.findIndex(a => a.id === originalActivity.id)

    // replaces the value at that index with the new activity
    userData.items[index].userActivities[activityIndex] = newActivity

    // preserve the original id
    userData.items[index].userActivities[activityIndex].id = originalID
    
  }

  export function deleteActivity(user : User | null, activity : Activity) {
    // finds the index of the index of the original activity according to the user id, then splices it
    const index = userData.items.findIndex(u => u.id === user?.id);
    const activityIndex = userData.items[index].userActivities.findIndex(a => a.id === activity.id);
    userData.items[index].userActivities.splice(activityIndex, 1);
}

