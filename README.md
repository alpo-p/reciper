<p align="center">
  <img src="Reciper-logo.png">
</p>

A hobby project for browsing, liking and sharing food recipes. A Fullstack React Native app built with Typescript. "Instagram for recipes". [Backend repository here](https://github.com/alpo-p/reciper_backend).

- [See a demo video of the app](https://photos.app.goo.gl/v9hqFFD199kJyVUu9)
OR
- [Download the .apk from here](https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40alpo-p/reciper-66b5168bae794dea9bcd04a82d57337f-signed.apk)
  - Demo account username: "Alpo" and password: "12345"
  - Note: since Heroku autokills the server if unused for a while, the client might have troubles connecting to it. If it happens, please give the server a minute to get back up and try logging in again
  
## Features
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
- Heroku
### Others
- MongoDB
- AWS S3 for pictures
- Jest and React Testing Library

## Roadmap
- Pagination to enable infinite scrolling
- Do not show added recipes by logged in user in the scroll view
- Advanced user management: allow to change info, delete account, add a picture etc.
- Register using Google/FB
- Better caching on GraphQL
- Fix known issues (below)

## Known issues
- Scaling problem on some devices
- Liking a recipe in scroll view doesn't update the heart icon in the full details view or vice versa
- Logging out *sometimes* throws a non-fatal error
- Some of the tests have broken down and have had problems fixing them; they have been commented out
- No automated e2e tests and the reason is silly: the old laptop I'm using cannot run android emulator without lagging

## Installation / usage (if not using the .apk)
- Clone both [client](https://github.com/alpo-p/reciper) and [server](https://github.com/alpo-p/reciper_backend) repositories
- `npm install` to install all dependencies
- Add keys.ts file to client root with AWS Access Key Id and Secret Key:
```
const keys = {
  AccessKeyId: "YOUR_ACCESS_KEY_HERE",
  SecretKey: "YOUR_SECRET_KEY_HERE"	
};
export default keys;
```
- Also edit the server uri in utils/apolloClient.ts
  - *Using .env file is currently commented out since it caused troubles in production build*
- Add .env file to server root directory with
  -  `MONGODB_URI='mongodb+srv://USERNAME:PASSWORD@cluster0.raufj.mongodb.net/DB_NAME_HERE?retyWrites=true&w=majority`
  -  `TEST_MONGODB_URI='mongodb+srv://USERNAME:PASSWORD@cluster0.raufj.mongodb.net/TEST_DB_NAME_HERE?retyWrites=true&w=majority`
  -  `JWT_SECRET='SECRET_KEY_HERE'`
- Run `npm run dev` on server root directory
- Run `npm start` on client root directory
- Open Expo app on your phone and start using the app by scanning the QR code on expo developer tools

## License
Distributed under the MIT License.

