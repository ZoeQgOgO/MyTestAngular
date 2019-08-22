import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  

import {MyDataService} from '../../my-data.service';
import {UserVM} from '../../shared/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:UserVM;
  signUpForm:any;
  Succeeded =false;
  message = null;  

  constructor(private service: MyDataService, private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.resetForm();
    this.signUpForm = this.formbuilder.group({
      Email:['', Validators.required],
      Password:['', Validators.required],
      Confirmpassword:['', Validators.required]
    });
  }

  resetForm(signUpForm?:NgForm){
    if(signUpForm!=null){
      signUpForm.reset();
    }
    this.user = {
      Email:'',
      Password:'',
      Confirmpassword:'',
     
    }

  }

  onSubmit(signUpForm:NgForm){
    this.Succeeded = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.service.registerUser(signUpForm.value).subscribe(
      (data:any)=>{
      if(data.Succeeded=true){
        this.resetForm(signUpForm);
        this.message='Login Successfully';
      }else{
        this.message='Login Deny';
      }
      });
  }



}
