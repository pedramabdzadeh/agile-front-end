import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {
  private readonly url = 'http://194.5.192.129:8000/';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  constructor(private httpClient: HttpClient) { }

  post<T>(postfix, body) {
    return this.httpClient.post<T>(this.url + postfix, body, this.httpOptions);
  }

  get<T>(postfix, params?) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params
    };
    return this.httpClient.get<T>(this.url + postfix, httpOptions);
  }

  put(postfix, body) {
    return this.httpClient.put(this.url + postfix, body, this.httpOptions);
  }

  delete(postfix, id) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      body: {
        id
      }
    };
    return this.httpClient.delete(this.url + postfix, httpOptions);
  }

  putImage(postfix: string, body: any) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'multipart/form-data'}),
    };
    return this.httpClient.put<any>(this.url + postfix, body);
  }
}
