import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private _http: Http) { }
  saveData(data) {
      const _path = 'https://local:host:3000/login',
      body = JSON.stringify({data}),
      headers = new Headers({'Content-type' : 'application/json'}),
      options = new RequestOptions({headers: headers});
      return this._http.post(_path, body, {headers: headers}).map(res => {
          return res.json();
      });
  }
}
