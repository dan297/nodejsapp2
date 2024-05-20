$.get(
    "https://api.ipdata.co?api-key=5fc17135129710477fc38f9aa34f24c7895226a0db58525d952c668e",
    function (response) {
      $("#country_name").html(response.country_name);
      $("#city").html(response.city);
      if (response.country_name == "Serbia") {
        window.location.replace("https://www.google.com");
      }

      if (response.city == null) {
        if (response.region == null) {
          $(".location").html("9 miles away");
          $("#location").html("9 miles away");
        }
        else{
          $(".location").html(response.region + ", " + response.country_name);
          $("#location").html(response.region + ", " + response.country_name);
        }
      } else {
        $(".location").html(response.city + ", " + response.country_name);
        $("#location").html(response.city + ", " + response.country_name);
      }
      
      var cords = response.latitude + "," + response.longitude;
  
  
      var img_url = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${cords}&zoom=14&size=400x300&sensor=false&key=AIzaSyDw8kElM5rbCy94UxAjQqgApUMkucBfaxY&markers=color:red%7C${cords}">`;
  
      img_url = `<img src="https://maps.googleapis.com/maps/api/staticmap?center=${cords}&zoom=14&size=400x300&sensor=false&key=AIzaSyDw8kElM5rbCy94UxAjQqgApUMkucBfaxY&markers=color:red%7C${cords}&signature=ZwR3x0fnpHCmP95LX18AfwXrbgA=">`;
  
      $("#mapholder").html(img_url);
    },
    "jsonp"
  );

  $(document).ready(function(){
    $('.carousel').carousel();


  });

  $("#button").on("click", function(){

    let searchParams = new URLSearchParams(window.location.search);

    if(searchParams.has('ref')){

      let param = searchParams.get('ref');

      if(param == "1"){
        window.location.replace("https://onlyfans.com/alexiagray/c25");
      }
      if(param == "2"){
        window.location.replace("https://onlyfans.com/alexiagray/c37");
      }
      if(param == "3"){
        window.location.replace("https://onlyfans.com/alexiagray/c38");
      }
       if(param == "4"){
        window.location.replace("https://onlyfans.com/alexiagray/c36");
      }
       if(param == "5"){
        window.location.replace("https://onlyfans.com/alexiagray/c39");
      }
         if(param == "4"){
        window.location.replace("https://onlyfans.com/alexiagray/c34");
      }
         if(param == "vip"){
        window.location.replace("https://onlyfans.com/alexiagray/c46");
      }

    
    }
    else{
      window.location.replace("https://onlyfans.com/alexiagray/c43");
    }
  });
