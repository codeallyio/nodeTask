# Node Interview Task

## Background

You got the idea of creating fake Facebook accounts to sell likes and follows. You want to automate the process a bit, so you have decided to create the database containing false personal information. To be more precise: `age`, `gender` and `email`. You have made the list of 1000 male and 1000 female names and put them to `names.js` file. Make the CRUD API for accessing users. As a database, use the `usersPseudoDB` array.

## TODO

#### CRUD API for accessing generated users:

* GET `/getUsers` ➜ getting all users
* GET `/getUser` ➜ getting the user using their `ID`
* POST `/generateUser` ➜ generate user and save in the `usersPseudoDB` array. It will be the most complicated function in the whole application. Inside of it, you are obligated to read some URL parameters. They are: `age`, `gender` and `email`. Then validate them using three functions from `dataGenerator.js`. If passed values will pass the validation, they would be returned. If not, the mock data would be generated.
* PUT `/updateUser` ➜ updating the user using their `ID`
* DELETE `/deleteUser` ➜ deleting the user using their `ID`

#### Sample POST `/generateUser` route:

`/generateUser?age=45&gender=male`<br />

It should generate only an `email`, since `age` and `gender` are already passed as parameters.

## Running the server

Development mode is being run by:

`npm run dev`

This command runs the server with `nodemon`.

The default port is `3000`.
