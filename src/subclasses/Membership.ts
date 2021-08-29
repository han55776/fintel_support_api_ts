import Model from './Model';
import { initializeParams } from './Interface';

class Membership extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async list(page?: Number, per_page?: Number) {
    return await this.request('GET', [
      `organization_memberships.json?page=${page}&per_page=${per_page}`,
    ]);
  }

  async listByUser(userID: Number, page?: Number, per_page?: Number) {
    return await this.request('GET', [
      'users',
      userID.toString(),
      `organization_memberships.json?page=${page}&per_page=${per_page}`,
    ]);
  }

  async listByOrganization(
    organiationID: Number,
    page?: Number,
    per_page?: Number
  ) {
    return await this.request('GET', [
      'organizations',
      organiationID.toString(),
      `organization_memberships.json?page=${page}&per_page=${per_page}`,
    ]);
  }

  async show(organizationMembershipID: Number) {
    return await this.request('GET', [
      'organization_memberships',
      organizationMembershipID.toString(),
    ]);
  }

  async showByUser(userID: Number, organizationMembershipID: Number) {
    return await this.request('GET', [
      'users',
      userID.toString(),
      'organization_memberships',
      organizationMembershipID.toString(),
    ]);
  }

  async create(organizationMembership: object) {
    return await this.request(
      'POST',
      ['organization_memberships'],
      organizationMembership
    );
  }

  async createByUser(userID: Number, organizationMembership: object) {
    return await this.request(
      'POST',
      ['users', userID.toString(), 'organization_memberships'],
      organizationMembership
    );
  }

  async delete(organizationMembershipID: Number) {
    return await this.request('DELETE', [
      'organization_memberships',
      organizationMembershipID.toString(),
    ]);
  }

  async deleteByUser(userID: Number, organizationMembershipID: Number) {
    return await this.request('DELETE', [
      'users',
      userID.toString(),
      'organization_memberships',
      organizationMembershipID.toString(),
    ]);
  }

  async makeDefault(userID: Number, organizationMembershipID: Number) {
    return await this.request('PUT', [
      'users',
      userID.toString(),
      'organization_memberships',
      organizationMembershipID.toString(),
      'make_default',
    ]);
  }
}

export default Membership;
