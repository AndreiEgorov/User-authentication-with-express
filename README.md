# User Authentication with express js demonstration

Index.js contains a server express.js server setup.

Fetch.js contains example of user post request to the server,
in this case the user, first, signsup to the server, by sending username and password and ,second, logsin using the same credentials. 

As user sends a post request to the server while signing up, the server receives a JSON file and encrypts the password received, and stores it as a hash string. Later, as the user attempts to sign in, the server applies an earlier generated salt to a newly received password  and compares it with the hash stored. If there is a match, the user is logged in, otherwise an error is produced. 


## Technologies used
    - express.js
    - bodyParser
    - bcryptjs (node.js library with built in encryption module)

## To run the demo

1. Download the package
1. Run npm install
1. Run nodemon index.js in your terminal to start the server.
1. Copy a code snippet from fetch.js (everything below line 50)
and insert it into your browser dev tools. (make sure you run a local host 'http://localhost:3000' )
For Chrome: Open DevTools -> Select "Sources" -> Add "New Snippet" and run the code.

