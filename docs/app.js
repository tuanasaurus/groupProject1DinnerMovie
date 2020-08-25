$(document).ready(function () {
  const apiKey =
    "2w5brNs3HF2ABKHAAT-I-QePQxcgY5vkGcva4WnpZxo1Dn9CLUevWblrCofVxQJymD3JEgh9JXfDDv3qRbTtBO-AV7TskU-h0fvMXwG1pdXc12iCTgiiLnThOvw9X3Yx";
  //click functionality to the Locate button to get a random restaurant based on location
  $("#locateBtn").click(function () {
    let location = $("#location").val().trim();
    location = encodeURI(location);
    console.log(location);
    $.ajax({
      url:
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=french,chinese,mexican,mediterranean&location=" +
        location,
      method: "GET",
      headers: {
        Authorization: "bearer " + apiKey,
      },
    }).then(function (response) {
      console.log(response);
      const categoriesArray = [
        "french",
        "chinese",
        "mediterranean",
        "mexican",
        "tradamerican",
        "italian",
        "pizza",
        "sushi",
        "soulfood",
        "korean",
        "japanese",
        "indpak",
        "comfortfood",
        "burmese",
        "burgers",
        "bbq",
        "thai",
        "vegan",
        "vegetarian",
        "vietnamese",
      ];

      //trying to create a variable to hold the selected dropdown option
      let cuisinePick = $("#cuisineSelect").val();

      //then i want to click the Randomize button to get a random restaurant based on location and cuisine choice
      const $randomizer = $("#random");

      // --IGNORE THE FOLLOWING COMMENTED OUT LINES - KEEPING THEM IN CASE I NEED TO USE: ---
      let randomRestaurant = Math.floor(Math.floor(Math.random() * 20));
      let restaurants = response.businesses[randomRestaurant].name;
      console.log("randomRestaurant", randomRestaurant);
      console.log("restaurants", restaurants);

      //This function loops through the list of restaurants to find 3 random ones
      $randomizer.click(function () {
        for (let i = 0; i < 3; i++) {
          let randomRestaurant = Math.floor(Math.floor(Math.random() * 20));
          let restaurant = response.businesses[randomRestaurant].name;
          let image = response.businesses[randomRestaurant].image_url;
          let url = response.businesses[randomRestaurant].url;
          let phone = response.businesses[randomRestaurant].phone;
          let price = response.businesses[randomRestaurant].price;
          let city = response.businesses[randomRestaurant].location.city;
          const categories = response.businesses[randomRestaurant].categories;
          //and then loops through the 3 randomly selected restaurants' categories array
          for (let index = 0; index < categories.length; index++) {
            //and then check if the categoriesArray set on line 21 matches the object categories
            if (categoriesArray.includes(categories[index].alias)) {
              console.log(restaurant);
              // this is for appending the restaurant name and other values
              $("#name").append.text(restaurant);
              $("#image-url").attr("href", image);
              $("#url").attr("href", url);
              $("#phone").append.text(phone);
              $("#price").append.text(price);
              $("#city").append.text(city);
              break;
            }
          }
          console.log(randomRestaurant);
        }
      });
    });
  });

  Math.random();
  // function that gets random number to use for ajax request for random page and index.
  function getRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  // function for ajax requesting movie previews
  // function getMoviePreview(movie_id) {
  //     $.ajax({
  //         url: 'https://api.themoviedb.org/3/movie/' + movie_id + '/videos?api_key=3005c900380601fd47b2b821bbb3a101&language=en-USappend_to_response=videos',
  //     }).then(function (response) {
  //         let results = response.results;
  //         let previewKey = results[0].key;
  //         return previewKey;
  //     })
  // }

  // define variables to construct the url
  const discoverUrl = "https://api.themoviedb.org/3/discover/movie?api_key=";
  const key = "3005c900380601fd47b2b821bbb3a101";
  const language = "&language=en-US";
  const sort = "&sort_by=";

  // const sortOptions = ['popularity.desc', 'release_date.desc', 'primary_release_date.desc', 'vote_avrage.desc'];
  let pageindex = getRandomNum(500 + 1);
  let randomIndex = getRandomNum(20);
  console.log(randomIndex);
  // ajax request for a random movie
  $.ajax({
    // adding options in the url to sort by populariy, exclude adult titles and select a random page number.
    url:
      discoverUrl +
      key +
      language +
      sort +
      "popularity.desc&include_adult=false&include_video=false&page=1",
    method: "GET",
  }).then(function (response) {
    console.log(response);
    // array of the 4 most current popular titles.
    let topMovies = [
      response.results[0],
      response.results[1],
      response.results[2],
      response.results[3],
    ];
    // // onload display trending choices
    // $('#popularOne').append.text(topMovies[0].title);
    // $('#popularTwo').append.text(topMovies[1].title);
    // $('#popularThree').append.text(topMovies[2].title);
    // $('#popularFour').append.text(topMovies[3].title);

    // brief description of movie.
    // $('#popularOneInfo').append.text(topMovies[0].overview);
    // $('#popularTwoInfo').append.text(topMovies[1].overview);
    // $('#popularThreeInfo').append.text(topMovies[2].overview);
    // $('#popularFourInfo').append.text(topMovies[3].overview);

    // poster of movie
    // $('#popularOnePoster').append.text(topMovies[0].poster_path);
    // $('#popularTwoPoster').append.text(topMovies[1].poster_path);
    // $('#popularThreePoster').append.text(topMovies[2].poster_path);
    // $('#popularFourPoster').append.text(topMovies[3].poster_path);

    // getMoviePreview(topMovies[0].id);
    // console.log(previewKey);
    // let previewOne = 'https://www.youtube.com/watch?v=' + previewKey
    // console.log(previewOne)
  });

  // ajax request for random film, to use with genrate random movie.
  $.ajax({
    // adding options in the url to sort by populariy, exclude adult titles and select a random page number.
    url:
      discoverUrl +
      key +
      language +
      sort +
      "popularity.desc&include_adult=false&include_video=false&page=" +
      pageindex,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    let randomFilm = response.results[randomIndex];
    console.log(randomFilm);
    let randomFilmID = randomFilm.id;
    console.log(randomFilmID);
    let randomFilmTitle = randomFilm.title;
    console.log(randomFilmTitle);
    let randomFilmInfo = randomFilm.overview;
    console.log(randomFilmInfo);
    let randomFilmPoster = randomFilm.poster_path;
    console.log(randomFilmPoster);

    getMoviePreview(randomFilmID);
  });
  // begin process of genrating movie based on genere
  // array of objects that contain MDB genres and coorisponding ID tag.
  let genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const length = Object.keys(genres).length;
  const randomNumber = Math.floor(Math.random() * length + 0);
  let randomGenreID = genres[Object.keys(genres)[randomNumber]];
  console.log(randomGenreID.id);

  // let randomGenreID = genres.id[Math.floor(Math.random() * genres.length)];
  // console.log(randomGenreID);
  // ajax to use with the geneate random genre
  $.ajax({
    url:
      discoverUrl +
      key +
      language +
      "&with_genres=" +
      randomGenreID.id +
      "&page",
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    // console.log(response.total_pages);
    // let randomPage = getRandomNum(response.total_pages);
    // console.log(randomPage)

    let randomGenreFilm = response.results[randomIndex];
    console.log(randomGenreFilm);
    let randomGenreTitle = randomGenreFilm.title;
    console.log(randomGenreTitle);
    let randomGenreInfo = randomGenreFilm.overview;
    console.log(randomGenreInfo);
    let randomGenrePoster = randomGenreFilm.poster_path;
    console.log(randomGenrePoster);
  });
});
