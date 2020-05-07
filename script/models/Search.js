export default class Search {
  constructor(query, limit) {
    this.query = query;
    this.limit = limit;
  }

  async fetchData() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${this.query}`
      );
      const data = await response.json();

      //after recive the response send the data to generate the HTML
      this.result = data;
    } catch (error) {
      console.log(error);
    }
  }
}
