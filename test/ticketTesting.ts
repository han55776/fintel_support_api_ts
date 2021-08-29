import { zdClient } from './zendeskClient';

const listTickets = async () => {
  const data = await zdClient.ticket.list();

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const showTicket = async () => {
  const data = await zdClient.ticket.show(417249709533);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const createTicket = async () => {
  const data = await zdClient.ticket.create({
    ticket: {
      requester_id: 1903217003925,
      assignee_id: 1903155695985,
      subject: 'urgent',
      comment: { body: 'this is an urgent ticket' },
    },
  });

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const updateTicket = async () => {
  const data = await zdClient.ticket.update(5, {
    ticket: { subject: 'really urgent' },
  });

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const deleteTicket = async () => {
  await zdClient.ticket.delete(8);
};

switch (process.argv[2]) {
  case '-l':
    listTickets();
    break;
  case '-s':
    showTicket();
    break;
  case '-u':
    updateTicket();
    break;
  case '-c':
    createTicket();
    break;
  case '-d':
    deleteTicket();
    break;
  default:
    break;
}
