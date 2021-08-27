import Model from "./Model";
import { initializeParams } from "./Interface";

class Search extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async query() {
    return await this.request("GET", ["tickets"]);
  }
}

export default Search;
