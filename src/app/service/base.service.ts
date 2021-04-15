import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { CONST } from '../CONST';

// @Injectable({
//   providedIn: 'root'
// })

export abstract class BaseService {

  constructor(private _http: HttpClient) { }

  get<T>(path: string) {
    return this._http.get<T>(path, { responseType: 'json' }).pipe(timeout(CONST.TIMEOUT_DURATION));
  }
}
