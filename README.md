Movies App

## Main functionality

- MoviesList contain list of Movies.
- User can scroll with pagination through the movies list
- User can filter movies by (upcoming | top rated | popularity ).
- User can see all the details related to the movie by click on the movie card.
- user can see all list offline
- user can know the status of network

## Prerequisites

- React Native CLI to be installed. You can install it by running the command:

`npm install -g react-native-cli`

- Simulator or emulator to run the app on.

### Installation

First clone the repo using `SSH` or `HTTPS`.
Here's an example using `HTTPS`:

`git clone https://github.com/aezzat3/MoviesApp.git`

Second run the following command to install project dependencies:

`yarn install`

**in IOS**

You will need to make one more step to install pods dependencies, run the following command in the project directory:

- `cd ios && pod install`

### Run on Device

- run `yarn android` or `yarn ios` to run on device or emulator.

### Run Unit Test

- run `yarn run test` to run all unit test suites.

### Used dependencies

```json
    "@react-native-async-storage/async-storage": "^1.21.0",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-native-community/netinfo": "^11.2.1",
    "@react-navigation/elements": "^1.3.21",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/stack": "^6.3.20",
    "axios": "^1.6.7",
    "moment": "^2.30.1",
    "react": "18.2.0",
    "react-native": "0.73.4",
    "react-native-gesture-handler": "^2.15.0",
    "react-native-reanimated": "^3.6.2",
    "react-native-safe-area-context": "^4.9.0",
    "react-native-screens": "^3.29.0",
    "react-query": "^3.39.3"
```

Also I am using `eslint` and prettier for better code formatting alongside [husky hooks](https://github.com/typicode/husky) to apply linting and formatting before each commit

