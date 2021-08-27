import Model from "./Model";
import { initializeParams } from "../classes/Interface";

class User extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async get() {
    return await this.request("GET", ["users"]);
  }

  async getOneById(userID: Number) {
    return await this.request("GET", ["users", userID.toString()]);
  }

  async createOne(user: object) {
    return await this.request("POST", ["users"], user);
  }

  async updateOneById(userID: Number, user: object) {
    return await this.request("PUT", ["users", userID.toString()], user);
  }

  async deleteOneById(userID: Number) {
    return await this.request("DELETE", ["users", userID.toString()]);
  }
}

export default User;
