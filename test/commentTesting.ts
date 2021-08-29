import { zdClient } from './zendeskClient';

const showComments = async () => {
  const data = await zdClient.comment.show(9);

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

const createComment = async () => {
  const data = await zdClient.comment.create(9, {
    comment: {
      author_id: 1903217003925,
      body: 'Sure when?',
      public: false,
    },
  });

  if (data.error) {
    console.log(data.details.base);
  } else {
    console.log(data);
  }
};

switch (process.argv[2]) {
  case '-s':
    showComments();
    break;
  case '-c':
    createComment();
    break;
  default:
    break;
}
