$(document).ready(function () {
    Math.random();
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    // Latest ID entry for MDB is 734982 below we generate a random number 
    // All movies, not very realistic to use this option has you can see it contains 743,000 + titles incluing Adult titles wtf..
    // looking for ways to get less films.

    // generate random ID
    // let randomId = getRandomInt((734982)+1);
    // console.log(randomId);  
    // const allMoviesUrl = 'https://api.themoviedb.org/3/movie/';   
    // const KeyForRandom = '?api_key=3005c900380601fd47b2b821bbb3a101';

        
    // $.ajax({
    //     url: allMoviesUrl + randomId + KeyForRandom,
    //     method: 'GET',
    // }).then(function(response){
    //     console.log(response);
    //     console.log(response.title);
        // console.log(response.overview);
        // console.log(response.id);
        // console.log(response.genres);
    
    // })
    // define variables to construct the url 
    const discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
    const key = '3005c900380601fd47b2b821bbb3a101'
    const language = '&language=en-US';
    const sort = '&sort_by=';
    const sortOptions = ['popularity.desc','release_date.desc', 'primary_release_date.desc','vote_avrage.desc'];
    let pageNum = getRandomInt((500)+1);
    let randomIndex = getRandomInt(20);
    console.log(randomIndex);
    // ajax request for a movies by current popularity excluding adult titles 
    $.ajax({
        url: discoverUrl + key + language + sort + sortOptions[0] + '&include_adult=false&include_video=false&page='+ pageNum,
        method: 'GET',
    }).then(function(response){
        console.log(response);
        // title of 
        console.log(response.results[randomIndex].title);
        console.log(response.results[randomIndex].release_date);
        console.log(response.results[randomIndex].overview);
        console.log(response.results[randomIndex].vote_average);
        console.log(response.results[randomIndex].poster_path);
        console.log(response.results[randomIndex].video);
       
    
    })
    $.ajax({
        url: discoverUrl + key + language + sort + sortOptions[3] + '&include_adult=false&include_video=false&page=1',
        method: 'GET',
    }).then(function(response){
        console.log(response);
       
    
    })
  
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
        $.ajax({
            url: discoverUrl + key + language + '&with_genres=' + 37,
            method: 'GET',
        }).then(function(response){
            console.log(response);
           
        
        })

    });