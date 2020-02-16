import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpService {
  private readonly url = 'http://194.5.192.129:8000/';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  constructor(private httpClient: HttpClient) { }

  post(postfix, body) {
    return this.httpClient.post(this.url + postfix, body, this.httpOptions);
  }

  get(postfix, params?) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      params
    };
    return this.httpClient.get(this.url + postfix, httpOptions);
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
}
