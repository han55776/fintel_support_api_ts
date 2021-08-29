import { zdClient } from './zendeskClient';

const listMemberships = async () => {
  const data = await zdClient.membership.list();

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const listUserMemberships = async () => {
  const data = await zdClient.membership.listByUser(1903155695985);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const listOrganizationMemberships = async () => {
  const data = await zdClient.membership.listByOrganization(1500516766961);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const showMembership = async () => {
  const data = await zdClient.membership.show(1501397665781);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const createMembership = async () => {
  const data = await zdClient.membership.create({
    organization_membership: {
      user_id: 1903217003925,
      organization_id: 1500516766961,
    },
  });

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const deleteMembership = async () => {
  await zdClient.membership.delete(1500516766761);
};

switch (process.argv[2]) {
  case '-l':
    listMemberships();
    break;
  case '-lu':
    listUserMemberships();
    break;
  case '-lo':
    listOrganizationMemberships();
    break;
  case '-s':
    showMembership();
    break;
  case '-c':
    createMembership();
    break;
  case '-d':
    deleteMembership();
    break;
  default:
    break;
}
