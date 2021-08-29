import Model from './Model';
import { initializeParams } from './Interface';

class Ticket extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async list(page?: Number, per_page?: Number) {
    return await this.request('GET', [
      `tickets.json?page=${page}&per_page=${per_page}`,
    ]);
  }

  async show(ticketID: Number) {
    return await this.request('GET', ['tickets', ticketID.toString()]);
  }

  async create(ticket: object) {
    return await this.request('POST', ['tickets'], ticket);
  }

  async update(ticketID: Number, ticket: object) {
    return await this.request('PUT', ['tickets', ticketID.toString()], ticket);
  }

  async delete(ticketID: Number) {
    return await this.request('DELETE', ['tickets', ticketID.toString()]);
  }
}

export default Ticket;
