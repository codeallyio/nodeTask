# Template for building Node Interview Tasks

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
