$(document).ready(function () {
    Math.random();
    // Latest ID entry is 734982 below we generate a random number 
    // All movies, not very realistic to use this option has you can see it contains 743,000 + titles incluing Adult titles wtf..
    // looking for ways to get less films.
    let randomId = Math.floor(Math.random() * 734982) +1;
    console.log(randomId);  
    const allMoviesUrl = 'https://api.themoviedb.org/3/movie/';   
    const key = '?api_key=3005c900380601fd47b2b821bbb3a101';

        
    $.ajax({
        url: allMoviesUrl + randomId + key,
        method: 'GET',
    }).then(function(response){
        console.log(response);
        console.log(response.title);
        console.log(response.overview);
        // console.log(response.id);
        // console.log(response.genres);
    
    })
    
    
    });