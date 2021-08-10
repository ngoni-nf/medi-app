import axios, {Method} from 'axios';
import config from '../config';

export interface IRequestConfig {
  baseUrl?: string;
}

export interface IRequestResult<T = []> {
  data?: T;
  total?: number;
  page?: number;
  limit?: number;
  offset?: number;
}

export interface IApiRequestable<S = any> {
  body?: S;
  configuration?: IRequestConfig;
  execute?: () => Promise<IRequestResult>;
  headers?: any;
  method?: Method;
  params?: any;
  paramsSerialized?: string;
  path?: string;
  serializeParams?: () => string;
  toUrlAndQuery?: () => string;
}

export declare type ApiRequestableConfig = Pick<
  IApiRequestable,
  'method' | 'path' | 'params' | 'headers' | 'body'
>;

export class ApiRequestable<S = any> implements IApiRequestable {
  public body: S;
  public configuration: IRequestConfig;
  public headers: any;
  public method: Method;
  public params: any;
  public paramsSerialized: string;
  public path: string;

  constructor(configuration?: ApiRequestableConfig) {
    this.body = Object.assign({}, configuration && configuration.body);
    this.configuration = config.Apis.baseUrl as IRequestConfig;
    this.headers = Object.assign(
      {},
      {'app-id': config.Apis.appId},
      configuration && configuration.headers,
    );
    this.method = (configuration && configuration.method) || 'GET';
    this.params = (configuration && configuration.params) || null;
    this.paramsSerialized = '';
    this.path = (configuration && configuration.path) || '';
  }

  public serializeParams = (): string => {
    const {params} = this;
    let str = [];
    for (let p in params)
      if (params.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
      }

    return str.join('&');
  };

  public toUrlAndQuery(): string {
    const params = this.params ? '?'.concat(this.serializeParams()) : '';
    console.log('config: ', this.configuration);
    console.log('path: ', this.path);
    return `${this.configuration}${this.path}${params}`;
  }

  public execute(): Promise<IRequestResult> {
    return new Promise<IRequestResult>((resolve, reject) => {
      const {method, headers} = this;
      const url = this.toUrlAndQuery();
      const data = this.body;

      axios({method, url, headers, data})
        .then((res) => {
          let result = res.data as IRequestResult;
          resolve(result);
        })
        .catch((err) => reject(err));
    });
  }
}
