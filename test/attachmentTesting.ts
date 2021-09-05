import fs from "fs";
import { zdClient } from "./zendeskClient";

const getBinaryData = (fileDirection: string) => {
  const binaryStr = fs.readFileSync(fileDirection).toString("binary");

  return binaryStr;
};

const uploadAttachment = async () => {
  // then, create ticket or comment with token
  const token = await zdClient.attachment.getToken("./", "test.png");

  const data = await zdClient.ticket.create({
    ticket: {
      requester_id: 1517181452582,
      assignee_id: 1903155695985,
      subject: "urgent",
      comment: { body: "this is an urgent ticket", uploads: [token] },
    },
  });

  console.log(data);
};

switch (process.argv[2]) {
  case "-u":
    uploadAttachment();
    break;
  default:
    break;
}
