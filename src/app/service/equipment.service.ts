import { SimpleResponse } from './../response/simple.response';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Branch, Location } from '../model/location.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getLocations() {
    return this.get<SimpleResponse<any>>('assets/catalog.json');
  }


}
