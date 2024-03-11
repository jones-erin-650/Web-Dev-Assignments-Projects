# TO DO

## Setup framework
- ~~gut the examples~~
- ~~import bulma for basic styling~~

## Setup template for each view
- doesn't need to have any functionality yet, just a layout

## ~~Setup proper bulma functionality~~

## Known problems
- when you import a component using the vue setup syntax it gives an error saying 'Could not find a declaration file for module'. this doesn't affect anything right now, but I'm weary of it and it's weird that it happens
- navbar burger functionality doesn't work

## ~~Create Routing~~
- Main Page w/statistics
- My Activity
- Friends' Activity
- Admin/Users
- Statistics (extra credit)

# Data Planning

## ~~Create Model for User objects~~

## ~~create model for workout objects~~

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

### navbar
1. ~~Create boilerplate navbar~~
2. ~~set it up in app.vue~~
3. ~~remove bulma boiler plate and make your own buttons~~
4. ~~create views and route through the navbar~~
5. set up hamburger menu for smaller screens
6. get a logo working 
7. style it better, have the button with the current page be darker
8. have the admin button only show up if the active user is an admin

### individual user components
1. need to store their data
2. should take in the user array as a ref
3. the user array should be passed in as a parameter in whatever page calls it
   
### a way to log in
1. there needs to be a loggedInUser variable somewhere that changes according to a sign in and log out button

### render all users
1. should show their name, pfp, email, username, and admin status
   
### render logged in user
1. take's the logged in user and shows their pfp and name
### basic button to log in

## Medium Priority 
- can only be done after figuring out the log in

### A way to render all workout components
1. Needs to take in data about workouts and cycle through them
### render user workout components
1. only takes in workout components and renders them if they are made by the user
### individual workout component
1. store the info somewhere
### way to edit workout components
### add workout
1. basic form that creates a new workout object using the inputs

## Lower Priority
- can only be done after figuring out workout components

### render statistics
1. needs to take in given statistics information and render them on screen

### render statistics
- each will be its own components

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
