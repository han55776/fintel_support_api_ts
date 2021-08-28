import Model from "./Model";
import { initializeParams } from "./Interface";

class Search extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async query(searchTerm: string) {
    return await this.request("GET", [
      "search",
      JSON.stringify({ query: searchTerm }),
    ]);
  }
}

export default Search;
