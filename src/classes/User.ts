import Model from "./Model";
import { initializeParams } from "../classes/Interface";

class User extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async list() {
    return await this.request("GET", ["users"]);
  }

  async show(userID: Number) {
    return await this.request("GET", ["users", userID.toString()]);
  }

  async create(user: object) {
    return await this.request("POST", ["users"], user);
  }

  async update(userID: Number, user: object) {
    return await this.request("PUT", ["users", userID.toString()], user);
  }

  async suspend(userID: Number) {
    return await this.request("PUT", ["users", userID.toString()], {
      user: { suspended: true },
    });
  }

  async unsuspend(userID: Number) {
    return await this.request("PUT", ["users", userID.toString()], {
      user: { suspended: false },
    });
  }

  async delete(userID: Number) {
    return await this.request("DELETE", ["users", userID.toString()]);
  }
}

export default User;
