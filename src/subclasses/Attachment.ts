import Model from "./Model";
import fs from "fs";
import { initializeParams } from "./Interface";

class Attachment extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  // returns token value for uploading binary format file
  async getToken(fileDirection: string, filename: string) {
    const fileData = fs.readFileSync(`${fileDirection}${filename}`);

    const token = await this.requestUpload(
      "POST",
      [`uploads.json?filename=${filename}`],
      fileData
    );

    return token;
  }

  // Not Implemented Yet
  // able to download files from client app
  async download() {
    return await this.request("GET", [`tickets.json?`]);
  }
}

export default Attachment;
