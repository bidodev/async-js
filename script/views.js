import { DOMstrings as elements } from "./elements.js";

export const getType = () => elements.inputType.value;

//query limit value
export const getLimit = () => elements.queryLimit.value;

export const clearResults = () => {
  elements.resultDiv.innerHTML = "";
};

const renderItem = (element, query) => {
  let markUp = "";

  switch (query) {
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
      break;

    case "users":
      const { name, username, email } = element;
      markUp = `
        <div class="description">
          <div class="title">Name: ${name}</div>
          <div class="sub-desc">UserName: ${username} ‧ Email: ${email}</div>
        </div>`;
      break;
  }
  elements.resultDiv.insertAdjacentHTML("beforeend", markUp);
};

export const renderResults = data => {
  const { query, limit, result } = data;

  for (let i = 0; i < limit; i++) {
    const element = result[i];
    renderItem(element, query);
  }
};
