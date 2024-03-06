# TO DO

## Setup framework
- ~~gut the examples~~
- ~~import bulma for basic styling~~

## Create Routing
- Main Page w/statistics
- My Activity
- Friends' Activity
- Admin/Users
- Statistics (extra credit)

## Components
### navbar
1. ~~Create boilerplate navbar~~
2. ~~set it up in app.vue~~
3. ~~remove bulma boiler plate and make your own buttons~~
4. ~~create views and route through the navbar~~
5. set up hamburger menu for smaller screens
6. get a logo working 
7. style it better, have the button with the current page be darker
8. have the admin button only show up if the active user is an admin
### A way to render all workout components
1. Needs to take in data about workouts and cycle through them
### render user workout components
1. only takes in workout components and renders them if they are made by the user
### individual workout component
1. store the info somewhere
### way to edit workout components
### add workout
1. basic form that creates a new workout object using the inputs
### basic button to use elsewhere
### render logged in user
1. take's the logged in user and shows their pfp and name somewhere
### render statistics
1. needs to take in given statistics information and render them on screen
### render today's statistics
1. probably checks if the date variable is the same and renders it if it does
2. probably needs to be passed in the user's workout information
### render this week's statistics
1. probably checks if the date variable is less than 7 days before and renders it if it does
2. probably needs to be passed in the user's workout information
### render all time's statistics
1. goes 
### calculate distance
1. takes in a group of workouts and calculates the total distance
### calculate duraction
### calculate avg pace
### calculate calories