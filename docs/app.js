$(document).ready(function () {
    const apiKey = "2w5brNs3HF2ABKHAAT-I-QePQxcgY5vkGcva4WnpZxo1Dn9CLUevWblrCofVxQJymD3JEgh9JXfDDv3qRbTtBO-AV7TskU-h0fvMXwG1pdXc12iCTgiiLnThOvw9X3Yx";
    $('#locateButton').click(function () {
        let location = $('#location').val().trim();
        location = encodeURI(location);
        console.log(location);
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=french,chinese,mexican,mediterranean&location=" + location,
            method: "GET",
            headers: {
                "Authorization": 'bearer ' + apiKey
            }
        }).then(function (response) {
            console.log(response);
            let cuisinePick = $('#cuisine').val();
            const $randomizer = $('#random');
            //let randomRestaurant = Math.floor(Math.floor(Math.random() * 20));
            //let restaurants = response.businesses[randomRestaurant].name;
            //console.log("randomRestaurant", randomRestaurant);
            //console.log("restaurants", restaurants);
            const categoriesArray = ['french', 'chinese', 'mediterranean', 'mexican','afghani','african', 'newamerican', 'tradamerican', 'andalusian', 'brazilian', 'italian', 'pizza', 'sushi'];
            $randomizer.click(function () {
                for (let i = 0; i < 3; i++) {
                    let randomRestaurant = Math.floor(Math.floor(Math.random() * 20));
                    let restaurant = response.businesses[randomRestaurant].name;
                    let city = response.businesses[randomRestaurant].location.city;
                    const categories = response.businesses[randomRestaurant].categories;
                    for (let index = 0; index < categories.length; index++) {
                        if (categoriesArray.includes(categories[index].alias)) {
                            console.log(restaurant);
                            // this is for appending name of restaurant
                            $('#alias').append(restaurant);
                            break;
                        }
                    }
                    console.log(randomRestaurant);
                }
            });
        });
    });


    Math.random();
    function getRandomindex(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function returnResults(response, index) {
        console.log(response.results[index].title);
        console.log(response.results[index].release_date);
        console.log(response.results[index].overview);
        console.log(response.results[index].vote_average);
        console.log(response.results[index].poster_path);
        console.log(response.results[index].video);


    }

    // define variables to construct the url 
    const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
    const key = '3005c900380601fd47b2b821bbb3a101'
    const language = '&language=en-US';
    const sort = '&sort_by=';
    // 0=popularity querying the most popular website 
    const sortOptions = ['popularity.desc', 'release_date.desc', 'primary_release_date.desc', 'vote_avrage.desc'];
    let pageindex = getRandomindex((500) + 1);
    let randomIndex = getRandomindex(20);
    console.log(randomIndex);
    // ajax request for a random movie 
    $.ajax({
        url: discoverUrl + key + language + sort + sortOptions[0] + '&include_adult=false&include_video=false&page=' + pageindex,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
        returnResults(response, randomIndex);
    })

    // array of object that contain MDB genres and coorisponding ID tag.
    let genres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]
    const length = Object.keys(genres).length;
    const randomNumber = Math.floor((Math.random() * length) + 0);
    let randomGenreID = genres[Object.keys(genres)[randomNumber]];
    console.log(randomGenreID.id)


    // let randomGenreID = genres.id[Math.floor(Math.random() * genres.length)];
    // console.log(randomGenreID);

    $.ajax({
        url: discoverUrl + key + language + '&with_genres=' + randomGenreID.id + '&page=' + pageindex,
        method: 'GET',
    }).then(function (response) {
        console.log(response);
        console.log(response.total_results);
        // returnResults(response,randomIndex);


    })


});