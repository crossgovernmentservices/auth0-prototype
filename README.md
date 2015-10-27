# Auth0 SSO prototype

Taken from [Auth0's Flask seed app](https://github.com/auth0/auth0-python/tree/master/examples/flask-api).

# Env vars and social ID provider API keys

Env vars for local dev (`.env`) and production (`production.env`), and API keys for social providers (`auth0.yml`) are encrypted using [Blackbox](https://github.com/StackExchange/blackbox/). Your GPG key will need to be added to the keyring to be able to decrypt these files.

# Running the example
In order to run the example you need to have `python` and `pip` installed.

You also need to set the ClientSecret, ClientId, Domain and CallbackURL for your Auth0 app as enviroment variables with the following names respectively: `AUTH0_CLIENT_SECRET`, `AUTH0_CLIENT_ID`, `AUTH0_DOMAIN` and `AUTH0_CALLBACK_URL`.

For that, if you just create a file named .env (see above) in the directory and set the values like the following, the app will just work:

````bash
# .env file
AUTH0_CLIENT_SECRET=myCoolSecret
AUTH0_CLIENT_ID=myCoolClientId
AUTH0_DOMAIN=samples.auth0.com
AUTH0_CALLBACK_URL=http://localhost:3000/auth/auth0/callback
````
Once you've set those 4 enviroment variables, just run `python server.py` and try calling [http://localhost:3000/](http://localhost:3000/)
