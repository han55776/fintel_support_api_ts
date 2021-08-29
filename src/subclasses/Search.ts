import Model from './Model';
import { initializeParams } from './Interface';

class Search extends Model {
  constructor(input: initializeParams) {
    super(input);
  }

  async query(searchTerm: string, page?: number, per_page?: number) {
    return await this.request('GET', [
      `search.json?query=${searchTerm}&page=${page}&per_page=${per_page}`,
    ]);
  }
}

export default Search;
