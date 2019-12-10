import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  title:string ='Items from JSON';
  myData = {};
  constructor(private service: MyDataService) { }

  ngOnInit() {
   this.service.getItems().subscribe(
     (data)=>{
       this.myData = data;
     }
   )
  }

}
