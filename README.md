# Node Interview Task

## Background

You got the idea of creating fake Facebook accounts to sell likes and follows. You want to automate the process a bit, so you have decided to create the database containing false personal information. To be more precise: `age`, `gender` and `email`. You have made the list of 1000 male and 1000 female names and put them to `names.js` file. Make the CRUD API for accessing users.

As a database, use the `usersPseudoDB` object from the file of the same name. Don't reassign the array from that object. Modify it only 'in-place'. It is important for testing purposes.

## TODO

#### CRUD API for accessing generated users:

1. GET `/users` ➜ get all users <br />
Returns an array with all users stored in the database.

2. GET `/user/:id` ➜ get the user by `ID`
* user found: return object with `message` 'User found successfully' and `user`
* user not found: return object with `message` 'User with id <id> not found

3. POST `/user` ➜ create new user <br />
Generate user and save in the `usersPseudoDB`'s array. Inside of it, you are obliged to read passed URL parameters. If they are: `age`, `gender` or `email`,  validate them using three functions from `dataGenerator.js` (at first it makes sure passed data are valid). If passed values will pass the validation, they would be returned. If not, the mock data would be generated. <br />
To get ID for new user, use `serialID` from `usersPseudoDB.js`. Remember to increment `serialID` before sending a response. <br />
Returns object with `message` 'User created successfully' and `user`

4. PUT `/user/:id` ➜ update the user by `ID`
* user found: return object with `message` 'User updated successfully' and `user`
* user not found: return object with `message` 'User with id <id> not found
  
5. DELETE `/user/:id` ➜ delete the user by `ID`
* user found: return object with `message` 'User deleted successfully' and `user`
* user not found: return object with `message` 'User with id <id> not found

To simplify tests, make sure all successful requests will response with status 200.

In situations, when passed user ID is not valid, response should have status 404. 

#### Sample POST `/user` request with URL parameters:

`/user?age=45&gender=male`<br />

`age` and `gender` are being provided in the URL. You should make sure this data is valid by dedicated functions. If it is not, it should be generated. Don't forget to generate an `email`.

## Running the server

Development mode is being run by:

`npm run dev`

This command runs the server with `nodemon`.

The default port is `3000`.

To run tests type:

`npm test`
