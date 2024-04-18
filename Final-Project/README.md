# TO DO - Final

## highest priority

### ~~move the json data to the server~~
- need to update aaaaall the times it's called on the client to make sure it still works in the new location

### Refactor the how activities are stored
- ~~rename workouts to activities everywhere~~
- remove the activities from the users.json and put them in their own seperate json file
- have a new variable for the user that posted the activity instead of having the user just have their own array
- have a function that gets the user from the originalPoster's handle, that way we can get all the information about the user that posted an activity from the activity itself

### ~~user model~~
- this is where the database is accessed
- add, update, remove functions go here
- takes the updated stuff and adds them to the users json file to store it
- should edit the getAll function to hide the user ID and admin status, but I'm not quite sure how to implement it without breaking some things right now (this is the .map(x=> (...x, password: undefined))) function he showed in class
- the add function has a feature that handles new users' ids, i already have something like this in the add user funciton in the client so i need to remove that part from the client to avoid id issues

### activities model
- needs to do everything the user model is doing
 
### ~~users controller~~
- calls the model
- handles get, post, patch, delete, etc requests from the client

### activities model

## medium priority
- can only do this after I finish the higher priority stuff

### connect the server to the client
- make it all the functions in the client send rest requests to the server

## lower priority - client side stragglers
- things I didn't do for the midterm that I probably should have

### create a way to add and edit users
- should be simple, basically just copy how it's done for activities

### implement a library for working with dates in javascript
- sort activities that way instead of with ids

### get the calories working



# TO DO - Midterm

## Known problems
- ~~when you import a component using the vue setup syntax it gives an error saying 'Could not find a declaration file for module'. this doesn't affect anything right now, but I'm weary of it and it's weird that it happens~~
1. fixed, this was a problem with a vs code extension called vetur
- ~~navbar burger functionality doesn't work~~
- when you switch the currentUser components that use it don't update until you go to another page and go back
- current page doesn't refresh on login
- ~~when you try to go to a page that uses a currentUser variable while you're not logged in the entire thing breaks (not good)~~
- ~~the addworkout button requires two clicks to open the modal~~
- ~~the isActive variable in MyActivity that gets passed to the AddWorkoutModal component is readonly for some reason, the functionality still works but it's weird that there's an error~~
- ~~toggleModal isn't working for the adduser feature, only the edit user feature (no idea how that worked)~~
1. fixed, there wasn't an event handler in the MyActivity page. but now there is a bit of repeated code
- the statistics for the current week don't work, something is wrong with the filter in the function (I will probably just use a seperate library for this)
- there's no system for tracking calories right now

## Setup framework
- ~~gut the examples~~
- ~~import bulma for basic styling~~

## add a date function library to make the statistics easier to use

## ~~Setup template for each view~~
- doesn't need to have any functionality yet, just a layout

## ~~Setup proper bulma functionality~~


## Known problems
- when you import a component using the vue setup syntax it gives an error saying 'Could not find a declaration file for module'. this doesn't affect anything right now, but I'm weary of it and it's weird that it happens
- ~~navbar burger functionality doesn't work~~


## ~~Create Routing~~
- Main Page w/statistics
- My Activity
- Friends' Activity
- Admin/Users
- Statistics (extra credit)

# Data Planning

## ~~Create Model for User objects~~

## ~~create model for workout objects~~

## ~~current user~~
- this is going to be stored in its own typescript file called currentuser.ts
- will be declared and stored here
- will have a function called refCurrentUser which just returns the currentUser variable, allowing other files to import and use it
- has a function to set its value

## new workout
1. NOTE: these functions have been moved to User.ts to make working with the data in the arrays much easier
- this is a group of functions relating to making and editing workouts that is stored in new-workout.ts
- there's a ref variable called newWorkout that can be set to be empty, then filled with new data
- adding: the newWorkout is pushed into the user's array
- editting: the editWorkout function takes in an originalWorkout parameter that has its values replaaced with the newWorkout

## ~~for god's sake fix the dummy data~~
- all the types and names are in different orders
- most users don't have pfps
- help
- ~~i don't think i even finished the workout template~~

## ~~Main Users Array~~
- will store users objects
- each user should have an array of workout objects
- should be made with a ts template


## ~~Workout Objects Array~~
- should be made with a ts template 

# Components

## Highest Priority

### ~~Allow the pages to be accessed even if there's not a current user~~
- ~~have a SignIn form component that promps the user to sign in~~
- ~~the way im currently doing it has a looooooooot of repeated code, it works but it needs to be optimized~~

### navbar
1. ~~Create boilerplate navbar~~
2. ~~set it up in app.vue~~
3. ~~remove bulma boiler plate and make your own buttons~~
4. ~~create views and route through the navbar~~
5. ~~set up hamburger menu for smaller screens~~
6. ~~get a logo working~~
7. style it better, have the button with the current page be darker
8. ~~have the admin button only show up if the active user is an admin~~
   
### a way to log in
1. there needs to be a loggedInUser variable somewhere that changes according to a sign in and log out button

### log in drop down
1. ~~add js scripts to close and open the dropdown on click~~
2. ~~add a check to see if there is a loggedInUser, if there is then change the text to "Switch Users"~~
3. ~~create a prop for that~~

### sign up button
1. ~~have it not render if there's already a user logged in~~

### render all users
~~1. should show their name, pfp, email, username, and admin status~~
2. ~~render their pfp in the first box (not working)~~
3. fix the styling; the stripes just arent working for some reason
   
### ~~welcome message to show the current user's name~~
1. ~~could update it to take it in as a prop to be more reusable but as it is now it works fine~~

### render logged in user
1. takes the logged in user and shows their pfp and name

## Medium Priority 
- can only be done after figuring out the log in

### ~~A way to render all workout components~~
1. Needs to take in data about workouts and cycle through them
2. means going through all of the users' workout arrays and rendering each object

### render user workout components
1. ~~only takes in workout components and renders them if they are made by the user~~
2. ~~just goes through the currently logged in user and renders their workout array~~
3. ~~make it look prettier~~
4. get the date and time working on it
5. ~~fix the image scaling issues~~
6. have workouts be sorted according to date
7. i think that the check for the user being the same as the current user is just current user passing and checking itself rn

### ~~way to edit workout components~~
1. ~~another form but this time it edits pre-existing workout objects~~

### add workout
1. ~~basic form that creates a new workout object using the inputs~~
2. ~~review v-model stuff for this~~
3. ~~will need a function probably in user.ts to append to a user's workout property~~
4. ~~restructure it to allow it to be reused for the edit workout component~~
5. ~~add a way for a unique id to be generated for each post corresponding to the previous post's~~

### ~~delete workout~~


### ~~a way to delete users in the admin page~~
1. needs to edit the users array to remove their entry

## Lower Priority
- can only be done after figuring out workout components

### render statistics
- each will be its own component
- first thing you do should convert feet to miles and minutes to hours to keep it consistent

1. ~~render today's statistics~~
- probably checks if the date variable is the same and renders it if it does
- probably needs to be passed in the user's workout information
2. render this week's statistics
- probably checks if the date variable is less than 7 days before and renders it if it does
- probably needs to be passed in the user's workout information
3. ~~render all time's statistics~~  

### statistics calculations
- each will probably be its own component
1. ~~calculate distance~~
2. ~~calculate duraction~~
3. ~~calculate avg pace~~
4. calculate calories
