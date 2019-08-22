import { Component, OnInit } from '@angular/core';

import { IOrderInfo } from '../shared/interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  title:string ='Orders';
  orders:IOrderInfo[];

  constructor() { }

  ngOnInit() {
    this.orders=[
      {OrderID:0,Date:'03/23/2019',Street:'345 amherst bend',City:'Dayton',ZipCode:45003},
      {OrderID:1,Date:'02/21/2018',Street:'Main Street',City:'New York',ZipCode:10015},
      {OrderID:2,Date:'11/13/2016',Street:'Elmma 3th',City:'LongIsland',ZipCode:45000},
    ];
  }

}
