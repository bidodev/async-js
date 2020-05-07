import { DOMstrings as elements } from "./elements.js";

const showResults = (element, type) => {
  let markUp = "";

  switch (type) {
    case "photos":
      const { albumId, id, title, url, thumbnailUrl } = element;

      markUp = `
        <div class="description">
          <div class="title">${title}</div>
          <div class="sub-desc">Album: ${albumId} ‧ Foto: ${id}</div>

          <figure class="composition">
            <img src=${thumbnailUrl} alt=${title}>
            <img src=${url} alt=${title}>
          </figure>
        </div>`;

      //insert the results
      elements.resultDiv.insertAdjacentHTML("beforeend", markUp);
      break;

    case "users":
      const { name, username, email } = element;

      markUp = `
            <div class="description">
            <div class="title">Name: ${name}</div>
            <div class="sub-desc">UserName: ${username} ‧ Email: ${email}</div>
            </div>`;

      //insert the results
      elements.resultDiv.insertAdjacentHTML("beforeend", markUp);
      break;
  }
};

document.querySelector(".fetch-values").addEventListener("click", () => {
  //clean the UI before call for new results...
  document.querySelector(".result").innerHTML = "";

  //URL API
  const type = elements.inputType.value;
  const urlAPI = `https://jsonplaceholder.typicode.com/${type}`;
  const limit = document.querySelector(".limit").value;

  //fetch values from the API.
  fetch(urlAPI)
    .then(result => {
      result.json().then(data => {
        //we received our data from the API.
        for (let i = 0; i < limit; i++) {
          const element = data[i];

          showResults(element, type);
        }
      });
    })
    .catch(err => console.log(err));
  //process the values from the API.
  //return to the use
});
