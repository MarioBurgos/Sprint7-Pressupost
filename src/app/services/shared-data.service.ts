import { Order } from './../interfaces/order';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public editTotals = [];
  public subject = new Subject<any>();
  private dataSource = new BehaviorSubject(this.editTotals);

  constructor() { }
}
