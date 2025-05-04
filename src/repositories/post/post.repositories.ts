import HttpRepository from "..";

import { IPost } from "./post.repositories.d";

interface IPostResponce {
  data: IPost[];
}

class PostRepository extends HttpRepository {
  private path = "posts";

  async getPosts(dto: { page: number; limit: number }): Promise<IPostResponce> {
    const responce = await this.get<IPostResponce>(`${this.path}`, dto);
    return responce;
  }
}

export default PostRepository;
