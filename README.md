<p align="center">
  <img src="Reciper-logo.png">
</p>

A hobby project for browsing, liking and sharing food recipes. A Fullstack React Native app built with Typescript. "Instagram for recipes".

[See a demo video of the app](https://photos.app.goo.gl/v9hqFFD199kJyVUu9)

## Features
*updated 14.6.2021*

- Fully working auth: register + login
- Browse recipes added by other users
- See full description, ingredients and directions for a recipe. Also checkmark which of the ingredients you own 
- Like a recipe and see the recipes you have liked
- Add a new recipe with a picture and see/delete recipes you have added
- 78.72% test coverage of lines

## Tech stack
### Client
- Typescript
- React Native
- Expo
- GraphQL
- React Navigation
- Formik & yup
- React Native Paper
- AWS SDK
### Server
- Typescript
- NodeJS
- GraphQL (Apollo)
- Mongoose
- Bcrypt
### Others
- MongoDB
- AWS S3 for pictures
- Jest and React Testing Library

## Roadmap
- Pagination to enable infinite scrolling
- Move from development build to production
- Do not show added recipes by logged in user in the scroll view
- Advanced user management: allow to change info, delete account, add a picture etc.
- Register using Google/FB
- Better caching on GraphQL
- Fix known issues (below)

## Known issues
- Liking a recipe in scroll view doesn't update the heart icon in the full details view or vice versa
- Logging out *sometimes* throws a non-fatal error
- Some of the tests have broken down and have had problems fixing them; they have been commented out
- No automated e2e tests and the reason is silly: the old laptop I'm using cannot run android emulator without lagging

## Installation / usage
- Clone both [client](https://github.com/alpo-p/reciper) and [server](https://github.com/alpo-p/reciper_backend) repositories
- `npm install` to install all dependencies
- Add .env file to client root with
  - `BACKEND_DEV_URI=http://192.168.0.14:4242/graphql` (add your own localhost uri) 
  - `AWSAccessKeyId=addYourOwnHere`
  - `AWSSecretKey=andAlsoHere`
- Add .env file to server root directory with
  -  `MONGODB_URI='mongodb+srv://USERNAME:PASSWORD@cluster0.raufj.mongodb.net/DB_NAME_HERE?retyWrites=true&w=majority`
  -  `TEST_MONGODB_URI='mongodb+srv://USERNAME:PASSWORD@cluster0.raufj.mongodb.net/TEST_DB_NAME_HERE?retyWrites=true&w=majority`
  -  `JWT_SECRET='SECRET_KEY_HERE'`
- Run `npm run dev` on server root directory
- Run `npm start` on client root directory
- Open Expo app on your phone and start using the app by scanning the QR code on expo developer tools

## License
Distributed under the MIT License.

