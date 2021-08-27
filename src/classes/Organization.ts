import Model from "./Model";
import { initializeParams } from "./Interface";

class Organization extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async get() {
    return await this.request("GET", ["tickets"]);
  }

  async createOne(ticket: object) {
    return await this.request("POST", ["tickets"], ticket);
  }
}

export default Organization;
