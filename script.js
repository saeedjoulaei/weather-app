const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const api = "8e494c609c89dad9aa16f72d10db41ed";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${api}&lang=fa&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { weather, name, main, sys } = data;

      console.log(weather[0]);
      console.log(name);
      console.log(sys.country);
      const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `<h2 class="city-name" data-name=${name},${sys.country}>
      <span>${name}</span>
      <span>${sys.country}</span>
      </h2>
      <div class="city-temp">${Math.round(main.temp)}</div>
      <figure>
      <img class="city-icon" src="${icon}" alt="city">
      <figurecaption>${weather[0]["description"]}</figurecaption>
      </figure>`;

      li.innerHTML = markup;
      list.appendChild(li);
      msg.innerText = "";
    })
    .catch(() => {
      msg.innerText = "search for a valid city ...";
    });
  input.value = "";
});
