# User Authentication System

This is a full-stack application built with the MERN stack, which is cross-platform and can be run on all three platforms: Android, iOS, and the web. It includes an authentication system built with password encryption, user registration using JWT tokens, and form validation from the client to the server to ensure data security.

To clone this repo to your local system, use `git clone <url of this repo>`.

Before proceeding, ensure that you have installed `expo-cli`. If not, run `npm install -g expo-cli` in your terminal to install it globally.

## Android Build

To test this app on your system, we recommend using the USB debugging option. Here are the steps to test the app via USB debugger:

1. Enable USB debugging on your Android device (you can refer to any YouTube video for guidance).
2. From the root directory, go to the server by running cd server, then run npm install && npm start. This will install the server packages and start the server on localhost.
3. From the root directory, go to the client by running cd client, and then run npm install.
4. Connect your mobile device to your system via USB.
5. Run `npm run expo start --localhost --android`. This will run the app on your device, and the home screen will be displayed.

![1682331520404](https://user-images.githubusercontent.com/63765514/233969626-9eb81acc-5e5f-4f50-8926-3f721bb60bb6.jpg)

To register, simply click on the `Register` button, which will redirect you to the registration screen. From there, you can enter your name and email to create an account.

![1682331520372](https://user-images.githubusercontent.com/63765514/233969879-259b30ca-b926-486f-81a0-42730837621c.jpg)

Once you have successfully registered, you will be taken to a welcome screen that will look similar to this:

 ![1682331520339](https://user-images.githubusercontent.com/63765514/233970020-01ee2f75-3996-4745-8c44-dab615c21bba.jpg)


## Web Build

Following the steps mentioned previously until the 4th point, run `npm run web` to create a web build.

You may be prompted to install additional dependencies such as `react-router-dom`,`webpack-dev-server@~3.11.0`, `@expo/webpack-config@`. You can install these dependencies manually and then run the web build again.
