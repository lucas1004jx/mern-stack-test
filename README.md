# mern-stack-test

## SERVER
1. `cd server` change to server folder
2. run `npm i` to install all the packages

## How to start server
### There are two ways to start the server:
1. You can use docker to start hte servaer and the mongoDB by runing hte command `npm run docker:up`
2. You also can lanche the mongoDB lcoally , then use the command `npm run run dev`, but you need you use the mongodb://localhost:27017/mern-stack as your mongoDB connection url, you can change it in .env file, by default it uses mongodb://mongo:27017/mern-stack for the docker use.

## TEST
run `npm run test:unit` to run test

# Client
1. `CD client` change to client folder
2. run `npm i` to install all the packages
3. run `npm start` to start the client app

# FEATURES
1. User can sign in
2. User can log in
3. User's log in/sign up input will be validated in the server side
4. After sign in, user will be redirect to log in page
5. After log in, user can click `my posts` button to see his/her posts
6. User can upload one image, which is hosted by cloudinary


