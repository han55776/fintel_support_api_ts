import { zdClient } from "./zendeskClient";

const listTickets = async () => {
  const data = await zdClient.ticket.list();

  console.log(data);
};

const showTicket = async () => {
  const data = await zdClient.ticket.show(417249709533);

  console.log(data);
};

const createTicket = async () => {
  const data = await zdClient.ticket.create({
    ticket: {
      requester_id: 1517181452582,
      assignee_id: 1903155695985,
      subject: "urgent",
      comment: { body: "this is an urgent ticket" },
    },
  });

  console.log(data);
};

const updateTicket = async () => {
  const data = await zdClient.ticket.update(5, {
    ticket: { subject: "really urgent" },
  });

  console.log(data);
};

const deleteTicket = async () => {
  await zdClient.ticket.delete(21);
};

switch (process.argv[2]) {
  case "-l":
    listTickets();
    break;
  case "-s":
    showTicket();
    break;
  case "-u":
    updateTicket();
    break;
  case "-c":
    createTicket();
    break;
  case "-d":
    deleteTicket();
    break;
  default:
    break;
}
