import Model from "./Model";
import { initializeParams } from "./Interface";

class Membership extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  // Lists all memberships regardless of organizations
  async list(populate?: String, page?: Number, per_page?: Number) {
    return await this.request("GET", [
      `organization_memberships.json?include=${populate}&page=${page}&per_page=${per_page}`,
    ]);
  }

  // Retrieves all organizations that he or she is part of it by user ID
  async listByUser(
    userID: Number,
    populate?: String,
    page?: Number,
    per_page?: Number
  ) {
    return await this.request("GET", [
      "users",
      userID.toString(),
      `organization_memberships.json?include=${populate}&page=${page}&per_page=${per_page}`,
    ]);
  }

  // Retrieves all members of one specific organization by organization ID
  async listByOrganization(
    organiationID: Number,
    populate?: String,
    page?: Number,
    per_page?: Number
  ) {
    return await this.request("GET", [
      "organizations",
      organiationID.toString(),
      `organization_memberships.json?include=${populate}&page=${page}&per_page=${per_page}`,
    ]);
  }

  async show(organizationMembershipID: Number) {
    return await this.request("GET", [
      "organization_memberships",
      organizationMembershipID.toString(),
    ]);
  }

  async showByUser(userID: Number, organizationMembershipID: Number) {
    return await this.request("GET", [
      "users",
      userID.toString(),
      "organization_memberships",
      organizationMembershipID.toString(),
    ]);
  }

  async create(organizationMembership: object) {
    return await this.request(
      "POST",
      ["organization_memberships"],
      organizationMembership
    );
  }

  async createByUser(userID: Number, organizationMembership: object) {
    return await this.request(
      "POST",
      ["users", userID.toString(), "organization_memberships"],
      organizationMembership
    );
  }

  async delete(organizationMembershipID: Number) {
    return await this.request("DELETE", [
      "organization_memberships",
      organizationMembershipID.toString(),
    ]);
  }

  async deleteByUser(userID: Number, organizationMembershipID: Number) {
    return await this.request("DELETE", [
      "users",
      userID.toString(),
      "organization_memberships",
      organizationMembershipID.toString(),
    ]);
  }

  // Optional Commands
  async makeDefault(userID: Number, organizationMembershipID: Number) {
    return await this.request("PUT", [
      "users",
      userID.toString(),
      "organization_memberships",
      organizationMembershipID.toString(),
      "make_default",
    ]);
  }
}

export default Membership;
