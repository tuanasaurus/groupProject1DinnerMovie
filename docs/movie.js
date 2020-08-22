$(document).ready(function () {
    Math.random();
    function getRandomindex(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    function returnResults(response,index) {
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
    const sortOptions = ['popularity.desc','release_date.desc', 'primary_release_date.desc','vote_avrage.desc'];
    let pageindex = getRandomindex((500)+1);
    let randomIndex = getRandomindex(20);
    console.log(randomIndex);
    // ajax request for a random movie 
    $.ajax({
        url: discoverUrl + key + language + sort + sortOptions[0] + '&include_adult=false&include_video=false&page='+ pageindex,
        method: 'GET',
    }).then(function(response){
        console.log(response);
        returnResults(response,randomIndex); 
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
            url: discoverUrl + key + language + '&with_genres=' + randomGenreID.id +'&page='+ pageindex,
            method: 'GET',
        }).then(function(response){
            console.log(response);
            console.log(response.total_results);
            returnResults(response,randomIndex);
           
        
        })

    });