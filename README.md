# Template for building Node Interview Tasks

## Story Part

Imagine you are young computer enthusiast from India. You were born in the poor family, so to go on studies, you need to take responsibility for your life and earn some money. You got the idea of creating fake facebook accounts to sell likes and follows. You want to automate the process a bit, so you decided on creating the database of fake personal information. To be more precise: `name`, `gender` and `age`. You made the list of 1000 male and 1000 female names and put them to `/db/db.js` file. Make CRUD API for generating users. As the database use `usersPseudoDB` array.

## TODO < NOT VALID RIGHT NOW >

Development mode is being run by:

`npm run dev`


By default it will run on port 3000. An only route is `/randomUser`.

It can receive parameters like:
* age
* gender
* email

## Sample route:

`http://localhost:3000/randomUser?age=45&gender=male`<br />

It will generate only an email, since required age and gender are already passed as parameters.
