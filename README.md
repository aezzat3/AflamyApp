MovieApp

https://github.com/aezzat3/MoviesApp/assets/61430379/879866fe-1f76-4e77-8b52-81d8dc28fde8

## Used API's

I am using API provided by
https://developers.themoviedb.org/3

 - Upcomming Movies  : `${BASE_URL}/movie/upcomming?api_key=${API_KEY}&page=${page}`
 - Top Rated Movies : `${BASE_URL}L/movie/top_rated?api_key=${API_KEY}&page=${page}`
 - Popular Movies : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
 - Genres : `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
 - Credits : `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    `


## Main technologies used

- React Native
- Typescript
- React Navigation (v5)
- React Query

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

## Screenshots
![Simulator Screenshot - iPhone 15 Pro Max - 2024-02-07 at 20 27 37](https://github.com/aezzat3/MoviesApp/assets/61430379/9cfd5ff6-4bab-453a-b2f1-b0bcf89570ec) ![Simulator Screenshot - iPhone 15 Pro Max - 2024-02-07 at 16 50 10](https://github.com/aezzat3/MoviesApp/assets/61430379/4567fd2f-5150-4dab-bb74-e3128934c2de) <img width="437" alt="Screenshot 2024-02-07 at 5 07 26 PM" src="https://github.com/aezzat3/MoviesApp/assets/61430379/b994de27-a1b1-47b2-9186-1df2785950cb">
