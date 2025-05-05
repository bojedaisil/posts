import HttpRepository from "..";

import { IPost } from "./index.repositories.d";

interface IPostResponce {
  post: IPost[];
}

class PostRepository extends HttpRepository {
  private path = "posts";

  async getPosts(): Promise<IPostResponce> {
    const responce = await this.get<IPostResponce>(`${this.path}`);

    return responce;
  }
}

export default PostRepository;
