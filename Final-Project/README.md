# TO DO

## Setup framework
- ~~gut the examples~~
- ~~import bulma for basic styling~~

## Setup template for each view
- doesn't need to have any functionality yet, just a layout

## ~~Setup proper bulma functionality~~

## Known problems
- when you import a component using the vue setup syntax it gives an error saying 'Could not find a declaration file for module'. this doesn't affect anything right now, but I'm weary of it and it's weird that it happens
- ~~navbar burger functionality doesn't work~~
- when you switch the currentUser components that use it don't update until you go to another page and go back
- current page doesn't refresh on login
- when you try to go to a page that uses a currentUser variable while you're not logged in the entire thing breaks (not good)

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

## for god's sake fix the dummy data
- all the types and names are in different orders
- most users don't have pfps
- help
- i don't think i even finished the workout template

## Main Users Array
- will store users objects
- I think each user should have an array of workout objects
- should be made with a ts template
- User Name/Handle
- Profile Picture
- First Name
- Last Name
- Workouts[]

## Workout Objects Array
- should be made with a ts template like how he showed in class
- Text
- Location
- Distance
- Duration
- Type
- Picture

# Components

## Highest Priority

### Allow the pages to be accessed even if there's not a current user
- have a SignIn form component that promps the user to sign in
- the way im currently doing it has a looooooooot of repeated code, it works but it needs to be optimized

### navbar
1. ~~Create boilerplate navbar~~
2. ~~set it up in app.vue~~
3. ~~remove bulma boiler plate and make your own buttons~~
4. ~~create views and route through the navbar~~
5. set up hamburger menu for smaller screens
6. get a logo working 
7. style it better, have the button with the current page be darker
8. have the admin button only show up if the active user is an admin
   
### a way to log in
1. ~~there needs to be a currentUser variable somewhere that changes according to a sign in and log out button~~

### log in drop down
1. ~~add js scripts to close and open the dropdown on click~~
2. add a check to see if there is a loggedInUser, if there is then change the text to "Switch Users"
3. ~~create a prop for that~~

### sign up button
1. have it not render if there's already a user logged in

### render all users
~~1. should show their name, pfp, email, username, and admin status~~
2. render their pfp in the first box (not working)
3. fix the styling; the stripes just arent working for some reason
   
### welcome message to show the current user's name
1. could update it to take it in as a prop to be more reusable but as it is now it works fine

## Medium Priority 
- can only be done after figuring out the log in

### A way to render all workout components
1. Needs to take in data about workouts and cycle through them
2. means going through all of the users' workout arrays and rendering each object

### render user workout components
1. ~~only takes in workout components and renders them if they are made by the user~~
2. ~~just goes through the currently logged in user and renders their workout array~~
3. make it look prettier
4. get the date and time working on it
5. fix the image scaling issues

### way to edit workout components
1. another form but this time it edits pre-existing workout objects

### add workout
1. basic form that creates a new workout object using the inputs
2. review v-model stuff for this
3. will need a function probably in user.ts to append to a user's workout property

### a way to delete users in the admin page
1. needs to edit the users array to remove their entry

## Lower Priority
- can only be done after figuring out workout components

### render statistics
1. needs to take in given statistics information and render them on screen

### render statistics
- each will be its own component

1. render today's statistics
- probably checks if the date variable is the same and renders it if it does
- probably needs to be passed in the user's workout information
2. render this week's statistics
- probably checks if the date variable is less than 7 days before and renders it if it does
- probably needs to be passed in the user's workout information
3. render all time's statistics  

### statistics calculations
- each will probably be its own component
1. calculate distance
2. calculate duraction
3. calculate avg pace
4. calculate calories
