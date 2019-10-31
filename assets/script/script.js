function search() {
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    let location = $("#locationInput").val().trim();

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&APPID=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log("City Name: " + response.name);
        console.log("Tempature: " + response.main.temp);
        console.log("Humidity: " + response.main.humidity);
        console.log("Wind Speed: " + response.wind.speed + " MPH");

        //date function 
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;




        //build weather card

        let a = $("<p>");
        a.text("City Name: " + response.name);
        $("#cardHolder").append(a);

        let b = $("<p>");
        b.text("Tempature: " + response.main.temp);
        $("#cardHolder").append(b);

        let c = $("<p>");
        c.text("Humidity: " + response.main.humidity);
        $("#cardHolder").append(c);

        let d = $("<p>");
        d.text("Wind Speed: " + response.wind.speed + " MPH");
        $("#cardHolder").append(d);

        let e = $("<p>");
        e.text("Date: " + today);
        $("#cardHolder").append(e);




    });
}