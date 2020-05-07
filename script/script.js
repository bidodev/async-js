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

elements.fetchBtn.addEventListener("click", () => {
  const type = elements.inputType.value;
  const urlAPI = `https://jsonplaceholder.typicode.com/${type}`;

  //prepare the UI for the results
  document.querySelector(".result").innerHTML = "";

  //call the controller function
  controller(urlAPI, type);
});

async function controller(urlAPI, type) {

  //how many items the user want to display in the screen..
  elements.queryLimit.value;

  const response = await fetch(urlAPI);
  const data = await response.json();

  for (let i = 0; i < limit; i++) {
    const element = data[i];

    showResults(element, type);
  }
}
