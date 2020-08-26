$(document).ready(function () {
Math.random();
  // function that gets random number to use for ajax request for random page and index.
  function getRandomNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  // function that add preview key to youtube url
  function addYoutubeKey(key) {
    let previewUrl = "https://www.youtube.com/watch?v=" + key;
    return previewUrl;
  }
  // function for ajax requesting movie previews
  function getMoviePreview(movie_id, callback) {
    $.ajax({
      url:
        "https://api.themoviedb.org/3/movie/" +
        movie_id +
        "/videos?api_key=3005c900380601fd47b2b821bbb3a101&language=en-USappend_to_response=videos",
    }).then(function (response) {
      let results = response.results;
      let previewKey = results[0].key;
      // console.log(previewKey);
      const previewUrl = addYoutubeKey(previewKey);
      //  calling the callback function to pass previewURL
      callback(previewUrl);
    });
  }

  // define variables to construct the url
  const discoverUrl = "https://api.themoviedb.org/3/discover/movie?api_key=";
  const key = "3005c900380601fd47b2b821bbb3a101";
  const language = "&language=en-US";
  const sort = "&sort_by=";
  // const sortOptions = ['popularity.desc', 'release_date.desc', 'primary_release_date.desc', 'vote_avrage.desc'];
  let pageindex = getRandomNum(500 + 1);
  let randomIndex = getRandomNum(20);
  // console.log(randomIndex);
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
    // console.log(response);
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
    // console.log(response);
    let randomFilm = response.results[0];
    // console.log(randomFilm)
    let randomFilmID = randomFilm.id;
    // console.log(randomFilmID);
    let randomFilmTitle = randomFilm.title;
    // console.log(randomFilmTitle);
    let randomFilmInfo = randomFilm.overview;
    // console.log(randomFilmInfo);
    let randomFilmPoster = randomFilm.poster_path;
    // console.log(randomFilmPoster);

    $("#movieBtnRandom").click(function(){
      const numberToShow = 3;
      let randomMovies = "";
      for (i = 0; i < numberToShow; i++){
        const movieTitle = $("<h1 class='card-title'>").text(response.results[i].title);
        const movieInfo = $("<p class='card-author'>").text(response.results[i].overview);
        const moviePoster = $("<img class='card-image'>").attr("src", "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + response.results[i].backdrop_path);
        const movieCard = $("<div class='card cell'>").append(moviePoster, movieTitle, movieInfo);
        $("#movieCards").append(movieCard);
        // console.log(response.results[i]);
      }
    });
    
    // // calling a call back function
    // getMoviePreview(randomFilmID, function (previewUrl) {
    //   // console.log(previewUrl);
    // });
  });


  // begin process of genrating movie based on genere
  // array of objects that contain MDB genres and coorisponding ID tag.
  let genres = [
    {
      id: 28,
      name: "action",
    },
    {
      id: 12,
      name: "adventure",
    },
    {
      id: 16,
      name: "animation",
    },
    {
      id: 35,
      name: "comedy",
    },
    {
      id: 80,
      name: "crime",
    },
    {
      id: 99,
      name: "documentary",
    },
    {
      id: 18,
      name: "drama",
    },
    {
      id: 10751,
      name: "family",
    },
    {
      id: 14,
      name: "fantasy",
    },
    {
      id: 36,
      name: "history",
    },
    {
      id: 27,
      name: "horror",
    },
    {
      id: 10402,
      name: "music",
    },
    {
      id: 9648,
      name: "mystery",
    },
    {
      id: 10749,
      name: "romance",
    },
    {
      id: 878,
      name: "scienceFiction",
    },
    {
      id: 10770,
      name: "tvMovie",
    },
    {
      id: 53,
      name: "thriller",
    },
    {
      id: 10752,
      name: "war",
    },
    {
      id: 37,
      name: "western",
    },
  ];

  // $("#movieBtnGenere").click(function() {
  // const genreSelect = $("#genreSelect").val();
  // console.log("genre select", genreSelect)
  const length = Object.keys(genres).length;
  const randomNumber = Math.floor(Math.random() * length + 0);
  let randomGenreID = genres[Object.keys(genres)[randomNumber]];
  // console.log("gerne", genres);
  // console.log("random number", randomNumber);
  // console.log("length", length);
  // console.log(randomGenreID.id);
  // let randomGenreID = genres.id[Math.floor(Math.random() * genres.length)];
  // console.log(randomGenreID);
  // ajax to use with the geneate random genre

  // function getGenreID(){
  //   genres.forEach(function(val){
  //     // console.log(val.id);
  //     if($("#genreSelect").val() === val.name){
  //       console.log($("#genreSelect"));
  //       let genreID = val.id;
  //       return genreID;
  //     }
  //     });
  //   }
  // getGenreID();

  $("#movieBtnGenre").click(function(){
    console.log($("#genreSelect"));

    const genreSelect = $("#genreSelect").val();
    const selectedGenre = genres.filter(obj =>{
      return obj.name === genreSelect
    });

  
  $.ajax({
    url:
      discoverUrl +
      key +
      language +
      "&with_genres=" +
      selectedGenre[0].id +
      "&page",
    method: "GET",
  }).then(function (response) {
    // console.log(response);
    // console.log(response.total_pages);
    let randomPage = getRandomNum(response.total_pages);
    // console.log(randomPage)

    // Function Get the the group of results we want 
    const numberToShow = 3;
    for (i = 0; i < numberToShow; i++){
      const movieTitle = $("<h1 class='card-title'>").text(response.results[i].title);
      const movieInfo = $("<p class='card-author'>").text(response.results[i].overview);
      const moviePoster = $("<img class='card-image'>").attr("src", "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + response.results[i].backdrop_path);
      const movieCard = $("<div class='card cell'>").append(moviePoster, movieTitle, movieInfo);
      $("#movieCards").append(movieCard);
      console.log(response.results[i]);
    }
  
  });
});
}); 