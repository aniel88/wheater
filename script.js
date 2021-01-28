window.addEventListener("load", function () {
  let long;
  let lat;
  let judet;
  let tara;
  let temp;
  let cod;
  let vant = document.getElementById("vant");
  let vreme = document.getElementById("vreme");
  let imagine = document.querySelector("img");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5b14e824b82e2a0474fb0ca5405b4b09`;
      fetch(api)
        .then((responso) => {
          return responso.json();
        })
        .then((data) => {
          document.querySelector(".loader").style.display = "none";
          cod = data.weather[0];
          console.log(cod);
          temp = data.main.temp - 273.15;
          temp = temp.toFixed(2);
          console.log(data);
          judet = data.name;
          console.log(judet);
          tara = data.sys.country;
          console.log(cod.id);

          imagine.src = `http://openweathermap.org/img/wn/${cod.icon}@2x.png`;
          vreme.textContent = `${cod.main}`;

          document.getElementById("judet").textContent = `${judet}, ${tara}`;
          document.getElementById(
            "descriere"
          ).textContent = `${cod.description}`;
          document.getElementById("temp-show").textContent = `${temp} °C`;
          vant.textContent = `Wind: ${data.wind.speed} meter/sec`;
        });
    });
  }
});
