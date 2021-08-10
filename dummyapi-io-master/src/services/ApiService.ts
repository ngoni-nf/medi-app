import {
  ApiRequestable,
  IApiRequestable,
  IRequestResult,
} from './ApiRequestable';
import config from '../config';

export interface IPostData {
  id: string;
  image: string;
  likes: number;
  link: string;
  owner: {};
  publishDate: string;
  tags: string[];
  text: string;
}

export interface IPostResponse extends IRequestResult<IPostData[]> {}

export interface IApiService {
  getPosts: () => IApiRequestable<IPostResponse>;
}

export class ApiService {
  private static userClient: string = config.Apis.services.user;
  private static postClient: string = config.Apis.services.post;
  private static tagClient: string = config.Apis.services.tag;

  public static getPosts = (limit: number = 10) =>
    new ApiRequestable<IPostResponse>({
      path: ApiService.postClient,
      params: {limit},
    });
}
