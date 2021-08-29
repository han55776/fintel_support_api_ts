import { zdClient } from './zendeskClient';

const listUsers = async () => {
  const data = await zdClient.user.list(1, 5);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const showUser = async () => {
  const data = await zdClient.user.show(1517034726362);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

// admin, agent, end-user
const createUser = async () => {
  const data = await zdClient.user.create({
    user: {
      email: 'enduser2@naver.com',
      name: 'test_account_enduser_2',
      role: 'end-user',
    },
  });

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const updateUser = async () => {
  const data = await zdClient.user.update(1517034726362, {
    user: { email: 'han5577@gmail.com', name: 'test_account_1', role: 'agent' },
  });

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const deleteUser = async () => {
  const data = await zdClient.user.delete(1517034726362);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

switch (process.argv[2]) {
  case '-l':
    listUsers();
    break;
  case '-s':
    showUser();
    break;
  case '-u':
    updateUser();
    break;
  case '-c':
    createUser();
    break;
  case '-d':
    deleteUser();
    break;
  default:
    break;
}
