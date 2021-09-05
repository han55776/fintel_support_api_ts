import { zdClient } from "./zendeskClient";

const listOrganizations = async () => {
  const data = await zdClient.organization.list();

  console.log(data);
};

const showOrganization = async () => {
  const data = await zdClient.organization.show(370444594694);

  console.log(data);
};

const createOrganization = async () => {
  const user_id = 1903155695985;
  const owner_id = user_id.toString();

  const data = await zdClient.organization.create({
    organization: {
      name: "this is temporary organization",
      external_id: owner_id,
    },
  });

  console.log(data);
};

const updateOrganization = async () => {
  const data = await zdClient.organization.update(1500516766761, {
    organization: { details: "test organization" },
  });

  console.log(data);
};

const deleteOrganization = async () => {
  await zdClient.organization.delete(1500516766761);
};

switch (process.argv[2]) {
  case "-l":
    listOrganizations();
    break;
  case "-s":
    showOrganization();
    break;
  case "-u":
    updateOrganization();
    break;
  case "-c":
    createOrganization();
    break;
  case "-d":
    deleteOrganization();
    break;
  default:
    break;
}
