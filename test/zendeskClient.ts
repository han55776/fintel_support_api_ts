import Client from "../src/Client";
// const zdClient = new Client({
//   username: "ysong@nautilusdigital.com",
//   password: "Han2481211!",
//   remoteUri: "https://nautilusdigitalgroup.zendesk.com/api/v2/",
// }).createClient();

const zdClient = Client.createClient({
  username: "",
  password: "",
  remoteUri: "",
});

export { zdClient };
