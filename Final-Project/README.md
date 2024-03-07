# TO DO

## Setup framework
- ~~gut the examples~~
- ~~import bulma for basic styling~~

## ~~Create Routing~~
- Main Page w/statistics
- My Activity
- Friends' Activity
- Admin/Users
- Statistics (extra credit)

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
### a way to log in
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