import Ticket from './subclasses/Ticket';
import User from './subclasses/User';
import Comment from './subclasses/Comment';
import Membership from './subclasses/Membership';
import Organization from './subclasses/Organization';
import Search from './subclasses/Search';
import { initializeParams } from './subclasses/Interface';

class Client {
  public ticket!: Ticket;
  public user!: User;
  public comment!: Comment;
  public membership!: Membership;
  public organization!: Organization;
  public search!: Search;

  constructor(input: initializeParams) {
    this.ticket = new Ticket(input);
    this.user = new User(input);
    this.comment = new Comment(input);
    this.membership = new Membership(input);
    this.organization = new Organization(input);
    this.search = new Search(input);
  }

  static createClient(input: initializeParams): Client {
    return new Client(input);
  }
}

export { Client };
