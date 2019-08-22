import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MyDataService} from '../../my-data.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  unSucceeded =false;
  constructor(private service: MyDataService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(username,password){
    this.service.userLogin(username,password).subscribe(
      (data:any)=>{
        localStorage.setItem('userToken',data.access_token);
        this.router.navigate(['/task']);
    },
    (err:HttpErrorResponse)=>{
      this.unSucceeded=true;
    });

  }

}
