import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly url = 'http://localhost:8000/';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
  };
  constructor(private httpClient: HttpClient) { }

  post(postfix, body) {
    return this.httpClient.post(this.url + postfix, body, this.httpOptions);
  }

  get(postfix) {
    return this.httpClient.get(this.url + postfix, this.httpOptions);
  }

  put(postfix, body) {
    return this.httpClient.get(this.url + postfix, this.httpOptions);
  }
}
