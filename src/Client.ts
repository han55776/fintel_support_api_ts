import Ticket from "./classes/Ticket";
import User from "./classes/User";
import Comment from "./classes/Comment";
import Membership from "./classes/Membership";
import Organization from "./classes/Organization";
import Search from "./classes/Search";
import { initializeParams } from "./classes/Interface";

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

export default Client;
