import { zdClient } from "./ZendeskClient";

const listTickets = async () => {
  const data = await zdClient.user.list();

  console.log(data);
};

const showTicket = async () => {
  const data = await zdClient.user.show(417249709533);

  console.log(data);
};

const createTicket = async () => {
  const data = await zdClient.user.create({
    user: {
      email: "g.han55776@naver.com",
      name: "test_account_12",
      role: "agent",
    },
  });

  console.log(data);
};

const updateTicket = async () => {
  const data = await zdClient.user.update(1517034726362, {
    user: { email: "han5577@gmail.com", name: "test_account_1", role: "admin" },
  });

  console.log(data);
};

const deleteTicket = async () => {
  const data = await zdClient.user.delete(1517034726362);

  console.log(data);
};

//listTickets();
//showTicket();
//updateTicket();
createTicket();
//deleteTicket();
