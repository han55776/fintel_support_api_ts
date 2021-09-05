import { zdClient } from "./zendeskClient";

// Lists all memberships regardless of organizations
const listMemberships = async () => {
  const data = await zdClient.membership.list();

  console.log(data);
};

// Retrieves all organizations that he or she is part of it by user ID
const listUserMemberships = async () => {
  const data = await zdClient.membership.listByUser(
    1517181452582,
    "organizations"
  );

  console.log(data);
};

// Retrieves all members of one specific organization by organization ID
const listOrganizationMemberships = async () => {
  const data = await zdClient.membership.listByOrganization(
    1500518339282,
    "users"
  );

  console.log(data);
};

// Shows details membership info with membership id
const showMembership = async () => {
  const data = await zdClient.membership.show(1501409858121);

  console.log(data);
};

const showUserMembership = async () => {
  const data = await zdClient.membership.showByUser(
    1517181452582,
    1501409858121
  );

  console.log(data);
};

const createMembership = async () => {
  const data = await zdClient.membership.create({
    organization_membership: {
      user_id: 1517151671461,
      organization_id: 1500518339282,
    },
  });
  console.log(data);
};

const deleteMembership = async () => {
  await zdClient.membership.delete(1500516766761);
};

switch (process.argv[2]) {
  case "-l":
    listMemberships();
    break;
  case "-lu":
    listUserMemberships();
    break;
  case "-lo":
    listOrganizationMemberships();
    break;
  case "-s":
    showMembership();
    break;
  case "-su":
    showUserMembership();
    break;
  case "-c":
    createMembership();
    break;
  case "-d":
    deleteMembership();
    break;
  default:
    break;
}
