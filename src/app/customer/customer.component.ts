import { Component, OnInit } from '@angular/core';

import { ICustomerInfo } from '../shared/interfaces';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title: string ='Customers';
  customers:ICustomerInfo[];
 
 
  constructor() { }

  ngOnInit() {
    this.customers=[
      {ID:1,Name:'abc',Age:22,Street:'weertt',City:'QWSXCE',ZipCode:123455},
      {ID:2,Name:'dcv',Age:25,Street:'sefs',City:'sadfga',ZipCode:324235},
      {ID:3,Name:'aqwebc',Age:34,Street:'qw',City:'qeq3r',ZipCode:234623},
      {ID:4,Name:'tnhn',Age:67,Street:'sefq',City:'ASGVAW',ZipCode:567545},
    ];
   
     }

}
