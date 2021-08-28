import Model from "./Model";
import { initializeParams } from "./Interface";

class Comment extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async getComments(ticketID: Number) {
    return await this.request("GET", [
      "tickets",
      ticketID.toString(),
      "comments",
    ]);
  }

  async create(ticketID: Number, comment: object) {
    return await this.request("PUT", ["tickets", ticketID.toString()], {
      ticket: comment,
    });
  }
}

export default Comment;
