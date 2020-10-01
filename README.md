# Express Boilerplate!

This is a boilerplate project used for starting new projects!

## Set up

Complete the following steps to set up a new boilerplate:

1. Clone this repo
2. `cd` into cloned repository
3. Make a fresh start of the git history with `rm -rf .git && git init`
4. Install dependencies with `npm install`
5. Move the example .env file to `.env` that will be ignored by git and read by and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start the nodemon for the application `npm run dev`

Run the texts `npm test`

## Deploying

When your new project is ready for deployment, add the heroku app with `heroku create`. This will make a new git remote called "heroku" and you can then run `npm run deploy` which will push to this remotes master branch
