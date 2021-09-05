import Model from "./Model";
import { initializeParams } from "./Interface";

class User extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async list(page?: Number, per_page?: Number) {
    return await this.request("GET", [
      `users.json?page=${page}&per_page=${per_page}`,
    ]);
  }

  async show(userID: Number, populate?: String) {
    return await this.request("GET", [
      "users",
      `${userID.toString()}.json?include=${populate}`,
    ]);
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
