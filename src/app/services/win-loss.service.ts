import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { WLObject } from './interfaces';

@Injectable()
export class WinLossService {

  constructor(private http: HttpClient) { }

  getWL(addr: string): Observable<any> {
    return this.http.get(addr);
  }

}
