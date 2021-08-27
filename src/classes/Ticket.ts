import Model from "./Model";
import { initializeParams } from "./Interface";

class Ticket extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async get() {
    return await this.request("GET", ["tickets"]);
  }

  async getOneById(ticketID: Number) {
    return await this.request("GET", ["tickets", ticketID.toString()]);
  }

  async createOne(ticket: object) {
    return await this.request("POST", ["tickets"], ticket);
  }

  async updateOneById(ticketID: Number, ticket: object) {
    return await this.request("PUT", ["tickets", ticketID.toString()], ticket);
  }

  async deleteOneById(ticketID: Number, ticket: object) {
    return await this.request(
      "DELETE",
      ["tickets", ticketID.toString()],
      ticket
    );
  }
}

export default Ticket;
