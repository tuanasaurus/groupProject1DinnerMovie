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
  
    $("#locateBtn").click(function () {
      let location = $("#myLocation").val().trim();
      location = encodeURI(location);
      // console.log(location);
      $.ajax({
        url:
          "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" +
          location,
        method: "GET",
        headers: {
          Authorization: "Bearer " + apiKey,
        },
      }).then(function (response) {
        console.log(response);
        //then i want to click the Randomize button to get a random restaurant based on location and cuisine choice
        const $randomizer = $(".random");
        // --IGNORE THE FOLLOWING COMMENTED OUT LINES - KEEPING THEM IN CASE I NEED TO USE: ---
        // let randomRestaurant = Math.floor(Math.floor(Math.random() * 20));
  
        // let restaurants = response.businesses[randomRestaurant].name;
        // let image = response.businesses[randomRestaurant].image_url;
        // let url = response.businesses[randomRestaurant].url;
        // let phone = response.businesses[randomRestaurant].phone;
        // let price = response.businesses[randomRestaurant].price;
        // let city = response.businesses[randomRestaurant].location.city;
        // const categories = response.businesses[randomRestaurant].categories[0].alias;
  
        // let restaurants1 = response.businesses[5].name;
        // let price1 = response.businesses[5].price;
        // const categories1 = response.businesses[5].categories[0].alias;
  
        // let restaurants2 = response.businesses[10].name;
        // let price2 = response.businesses[10].price;
        // const categories2 = response.businesses[10].categories[0].alias;
  
  
        // const restaurantName0 = $("<h2 class='card-title'>").text(restaurants);
        // // const restaurantImage0 = $("<img class='card-image'>").src(image);
        // const restaurantPrice0 = $("<p class='card-title'>").text(price);
        // const restaurantCategory0 = $("<p class='card-title'>").text(categories);
        // $("#foodCard1").append(restaurantName0, restaurantPrice0, restaurantCategory0);
        // const restaurantName1 = $("<h2 class='card-title'>").text(restaurants1);
        // const restaurantPrice1 = $("<p class='card-title'>").text(price1);
        // const restaurantCategory1 = $("<p class='card-title'>").text(categories1);
        // $("#foodCard2").append(restaurantName1, restaurantPrice1, restaurantCategory1);
        // const restaurantName2 = $("<h2 class='card-title'>").text(restaurants2);
        // const restaurantPrice2 = $("<p class='card-title'>").text(price2);
        // const restaurantCategory2 = $("<p class='card-title'>").text(categories2);
        // $("#foodCard3").append(restaurantName2, restaurantPrice2, restaurantCategory2);
  
        //to target the selected option
        let cuisinePick = $(".cuisineSelect").val();
        const selectedCuisine = categoriesArray.filter(obj =>{
        return obj.name === cuisinePick
        });
        // console.log(cuisinePick);
  
        //This function loops through the list of restaurants to find 3 random ones
        $randomizer.click(function() {
          // console.log("clicked");
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
  
            const numberToShow = 3;
            let randomRestaurants = "";
            for (i = 0; i < numberToShow; i++){
              const foodTitle = $("<h1 class='card-title'>").text(response.businesses[i].name);
              const foodInfo = $("<p class='card-author'>").text(response.businesses[i].phone);
              const foodLink = $("<button class='button'>").text("Order", response.businesses[i].url);
              const foodImage = $("<img class='card-image'>").attr("src", response.businesses[i].image_url);
              const foodCard = $("<div class='card cell'>").append(foodTitle, foodInfo, foodLink, foodImage);
              $("#foodCards").append(foodCard);
              console.log(response.results[i]);
            }
  
            for (let index = 0; index < categories.length; index++) {
              //and then check if the categoriesArray set on line 21 matches the object categories
              if (cuisinePick === categoriesArray.includes(categories[index].alias)) {
                // console.log(restaurant);
                // this is for appending the restaurant name and other values
                // $("#name").append.text(restaurant);
                // $("#image-url").attr("href", image);
                // $("#url").attr("href", url);
                // $("#phone").append.text(phone);
                // $("#price").append.text(price);
                // $("#city").append.text(city);
                // break;
              }
            }
            // console.log(randomRestaurant);
          }
        });
      });
    });
});