# Group Project 1 - Dinner & A Movie

## User story and Project scope
"Leave it up to us, we got you" 

Can't decide what to watch and eat? (Maybe a drink)
Our app will display suggestions of what movie to watch based on selection from the user. Selection choices are genre, ratings, timeline(years) . (Actors, issue with how the user type out a name, etc...)
Our app will randomize different cuisine choices for the user. 
User select location then we display by distance place with delivery/takeout. 

## Overview of App 
1. User select genre or rating then choose how many choices (dropdown 1-5-10) 

2. Our app generate those choices along with cuisine choices 

3. User pick a cuisine then we genrate places around the user's location within specify radius (Based on miles 1-10)


## APIs
Google Places API 
Movie API https://developers.themoviedb.org/3/getting-started/introduction

## Functionality
1. User land on page with a simple intro to the app 
    1B. User select their location 

USER CAN SELECT AS MANY OR AS LITTLE CHOICES 

<button>DO IT ALL FOR ME</button>
1 choice of each 

2. User select if they want just a movie (MDB API)
    2B. Select just food 
    2C. Select both food and movie

3. 2A - Movie - User select genre, rating(E, PG, R), star rating(89%etc..) timeline(in block of 5 years 1920-2020) 
    3B. User gets 3 choices
    3C. We display choices in card design with 
        movie name, poster, year, actors(3), short plot, video preview, streaming services

4. 2B - Food - User select price range,  User select radius of search (Based on miles 1-10), and ratings 
    4B. We generate 3 cuisines choices based on (26 popular choices) 
        4B2. User select cuisine choice 
        4B3. Give the user 3 restaraunts (Google Places API)
    4C. Select the cuisine that you want then we randomize the restaruants

5. Combine 3 & 4

If they like what they try they can save it to the list 
Local storage of last searched 

## Work Cal