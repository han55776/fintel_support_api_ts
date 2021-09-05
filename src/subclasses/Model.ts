import fetch from "node-fetch";
import { initializeParams } from "./Interface";

interface UploadResponse {
  upload: {
    token: string;
    expires_at?: string;
    attachments?: [object];
    attachment?: object;
  };
}

class Model {
  private remoteUri!: string;
  private username!: string;
  private password!: string;
  private token: string = "";
  private subdomain: string = "";
  private encoded: string = "";
  private authorization: string = "";

  constructor(input: initializeParams) {
    this.remoteUri = input.remoteUri;
    this.username = input.username;
    this.password = input.password;
    this.encoded = Buffer.from(
      `${this.username}:${this.password}`,
      "binary"
    ).toString("base64");
    this.authorization = `Basic ${this.encoded}`;
  }

  async request(method: string, params: string[], args?: object) {
    const requestURL = `${this.remoteUri + params.join("/")}`;
    var options = {
      method,
      body: args ? JSON.stringify(args) : undefined,
      headers: {
        "Content-Type": "application/json",
        Authorization: this.authorization,
      },
    };

    var response = await fetch(requestURL, options);

    if (method !== "DELETE") {
      response = await response.json();
    }

    return response;
  }

  async requestUpload(method: string, params: string[], fileData: Buffer) {
    const requestURL = `${this.remoteUri + params.join("/")}`;

    let options = {
      method: "POST",
      body: fileData,
      headers: {
        "Content-Type": "application/binary",
        Authorization: this.authorization,
      },
    };

    var response = await fetch(requestURL, options);

    var payload: UploadResponse = await response.json();

    return payload.upload.token;
  }
}

export default Model;
