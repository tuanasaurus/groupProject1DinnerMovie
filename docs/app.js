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
            const categoriesArray = ["french", "chinese", "mediterranean", "mexican"];
            $randomizer.click(function () {
                for (let i = 0; i < 3; i++) {
                    let randomRestaurant = Math.floor(Math.floor(Math.random() * 20));
                    let restaurant = response.businesses[randomRestaurant].name;
                    let city = response.businesses[randomRestaurant].location.city;
                    const categories = response.businesses[randomRestaurant].categories;
                    for (let index = 0; index < categories.length; index++) {
                        if (categoriesArray.includes(categories[index].alias)) {
                            console.log(restaurant);
                            $('#alias').append(restaurant);
                            break;
                        }
                    }
                    console.log(randomRestaurant);
                }
            });
        });
    });
});