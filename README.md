# Node Interview Task

## Background

You got the idea of creating fake Facebook accounts to sell likes and follows. You want to automate the process a bit, so you have decided to create the database containing false personal information. To be more precise: `age`, `gender` and `email`. You already have the list of 1000 male and 1000 female names. They are inside `names.js` file. Make the CRUD API for accessing fake users.

## TODO

#### CRUD API for accessing generated users:

1. GET `/users` ➜ get all users <br />
￮ returns an array with all the users from the database

2. GET `/user/:id` ➜ get the user by `ID`<br />
￮ 1st case: user found ➜ return object with `message` 'User found successfully' and actual `user`<br />
￮ 2nd case: user not found ➜ return object with only a `message` equal to 'User with id <id> not found'

3. POST `/user` or `/user?age=..&gender=..&email=..` ➜ create new user <br />
￮ read URL parameters<br />
￮ check their validity and if they are non-valid, generate these values. Hint: `src/utils/..`<br />
￮ simply generate missing user's attributes<br />
￮ save user into Mongo database<br />
￮ return object with `message` 'User created successfully' and newly created `user`

4. PUT `/user/:id` ➜ update the user by `ID`
￮ 1st case: user found ➜ return object with `message` 'User updated successfully' and updated `user`<br />
￮ 2nd case: user not found ➜ return object with `message` 'User with id <id> not found'
  
5. DELETE `/user/:id` ➜ delete the user by `ID`
￮ 1st case: user found ➜ return object with `message` 'User deleted successfully' and deleted `user`
￮ 2nd case: user not found ➜ return object with `message` 'User with id <id> not found'

To simplify tests, make sure all successful requests will response with status 200.

In situations when passed user's ID is not valid, response should have status 404. 

#### Sample POST `/user` request with URL parameters:

`/user?age=45&gender=male`<br />

`age` and `gender` are being provided in the URL. You should make sure this data is valid by dedicated functions. If it is not, it should be generated. Don't forget to generate an `email`.

## Running the server

The default port is `:3000`.<br />
There is no `/` endpoint, so don't worry after seeing not found page when getting into preview.

### Run development mode

`npm run dev`

This command runs the server with `nodemon`.

### Run tests

`npm test`

---

### Good Luck!
