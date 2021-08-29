import Model from './Model';
import { initializeParams } from './Interface';

class Organization extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async list(page?: Number, per_page?: Number) {
    return await this.request('GET', [
      `organizations.json?page=${page}&per_page=${per_page}`,
    ]);
  }

  async show(organizationID: Number) {
    return await this.request('GET', [
      'organizations',
      organizationID.toString(),
    ]);
  }

  async create(organization: object) {
    return await this.request('POST', ['organizations'], organization);
  }

  async update(organizationID: Number, organization: object) {
    return await this.request(
      'PUT',
      ['organizations', organizationID.toString()],
      organization
    );
  }

  async delete(organizationID: Number) {
    return await this.request('DELETE', [
      'organizations',
      organizationID.toString(),
    ]);
  }
}

export default Organization;
