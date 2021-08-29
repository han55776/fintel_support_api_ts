import { zdClient } from './zendeskClient';

const stringifyQuery = (input: object) => {
  var queryStr = '';

  for (const [key, value] of Object.entries(input)) {
    queryStr += `${key}:${value} `;
  }

  return queryStr;
};

const ticketSearch = async () => {
  const params = { type: 'ticket', status: 'new' };

  const strQuery = stringifyQuery(params);

  console.log(strQuery);

  const data = await zdClient.search.query(strQuery, 1, 1);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const userSearch = async () => {
  const params = { type: 'user', role: 'agent' };

  const strQuery = stringifyQuery(params);

  const data = await zdClient.search.query(strQuery, 1, 2);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

switch (process.argv[2]) {
  case '-t':
    ticketSearch();
    break;
  case '-u':
    userSearch();
    break;
  default:
    break;
}
