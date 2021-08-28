import Model from "./Model";
import { initializeParams } from "./Interface";

class Ticket extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async list() {
    return await this.request("GET", ["tickets"]);
  }

  async show(ticketID: Number) {
    return await this.request("GET", ["tickets", ticketID.toString()]);
  }

  async create(ticket: object) {
    return await this.request("POST", ["tickets"], ticket);
  }

  async update(ticketID: Number, ticket: object) {
    return await this.request("PUT", ["tickets", ticketID.toString()], ticket);
  }

  async delete(ticketID: Number, ticket: object) {
    return await this.request(
      "DELETE",
      ["tickets", ticketID.toString()],
      ticket
    );
  }
}

export default Ticket;
