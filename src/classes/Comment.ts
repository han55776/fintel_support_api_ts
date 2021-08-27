import Model from "./Model";
import { initializeParams } from "./Interface";

class Comment extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async getById(ticketID: Number) {
    return await this.request("GET", ["tickets"]);
  }

  async createOne(comment: object) {
    return await this.request("POST", ["tickets"], comment);
  }
}

export default Comment;
