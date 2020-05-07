import Search from "./models/Search.js";
import { DOMstrings as elements } from "./elements.js";
import * as searchView from "./views.js";

const controlSearch = async () => {
  // get the query and limit from the view
  const query = searchView.getType();
  const limit = searchView.getLimit();

  if (limit) {
    // New search object and add to state
    const search = new Search(query, limit);
    console.log(search);

    //grab data
    await search.fetchData();

    //Prepare the UI for
    searchView.clearResults();

    //render results on the UI
    searchView.renderResults(search);
  } else {
    alert("Please insert a number..");
  }
};

elements.fetchBtn.addEventListener("click", controlSearch);
