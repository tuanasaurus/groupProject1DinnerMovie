$(document).ready(function () {
    const categoriesArray = [
      "bbq",
      "burgers",
      "burmese",
      "chinese",
      "comfortfood",
      "french",
      "indpak",
      "italian",
      "japanese",
      "korean",
      "mediterranean",
      "mexican",
      "pizza",
      "sushi",
      "soulfood",
      "thai",
      "tradamerican",
      "vegan",
      "vegetarian",
      "vietnamese",
    ];
  
    //Grab the location that the user inputted,
    // Grab cuisine that the user inputted,
    // Conditional statement to check whether the cuisine is empty or not,
    //If the cuisine is empty then grab a random cuisine
    const apiKey =
      "2w5brNs3HF2ABKHAAT-I-QePQxcgY5vkGcva4WnpZxo1Dn9CLUevWblrCofVxQJymD3JEgh9JXfDDv3qRbTtBO-AV7TskU-h0fvMXwG1pdXc12iCTgiiLnThOvw9X3Yx";
    //click functionality to the Locate button to get a random restaurant based on location

    $("#cuisineBtn").click(function () {
        let location = $("#myLocation").val().trim();
        location = encodeURI(location);
        let cuisinePick = $("#cuisineSelect").val();
        console.log(cuisinePick);
        // console.log(location);
        $.ajax({
            url:
            "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
            location +
            "&term=" +
            cuisinePick,
          method: "GET",
          headers: {
            Authorization: "Bearer " + apiKey,
          },
        }).then(function (response) {
            const numberToShow = 3;
            for (i = 0; i < numberToShow; i++){
              console.log("test", i);
              console.log(numberToShow);
              let randomRestaurant = Math.floor(Math.floor(Math.random() * 20));
              const foodTitle = $("<h1 class='card-title'>").text(response.businesses[randomRestaurant].name);
              const foodInfo = $("<p class='card-author'>").text(response.businesses[randomRestaurant].phone);
              const foodLink = $("<button class='button'>").text("Order", response.businesses[randomRestaurant].url);
              const foodImage = $("<img class='card-image'>").attr("src", response.businesses[randomRestaurant].image_url);
              const foodCard = $("<div class='card cell'>").append(foodImage, foodTitle, foodInfo, foodLink,);
              $("#foodCards").append(foodCard);
            }
    });
});
  
    $("#randomlocateBtn").click(function () {
      let location = $("#myLocation").val().trim();
      location = encodeURI(location);
      console.log(location);
      $.ajax({
        url:
          "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
          location,
        method: "GET",
        headers: {
          Authorization: "Bearer " + apiKey,
        },
      }).then(function (response) {

        const numberToShow = 3;
          for (i = 0; i < numberToShow; i++){
            // console.log("test", i);
            // console.log(numberToShow);
            let randomRestaurant = Math.floor(Math.floor(Math.random() * 20));
            const foodTitle = $("<h1 class='card-title'>").text(response.businesses[randomRestaurant].name);
            const foodInfo = $("<p class='card-author'>").text(response.businesses[randomRestaurant].phone);
            const foodLink = $("<button class='button'>").text("Order", response.businesses[randomRestaurant].url);
            const foodImage = $("<img class='card-image'>").attr("src", response.businesses[randomRestaurant].image_url);
            const foodCard = $("<div class='card cell'>").append(foodImage, foodTitle, foodInfo, foodLink,);
            $("#foodCards").append(foodCard);
          }
      });
    });
});