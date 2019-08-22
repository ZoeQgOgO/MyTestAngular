import { Injectable,EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders, HttpHeaderResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

import {TaskVM} from './shared/task.model';
import {UserVM} from './shared/user.model';



@Injectable({
  providedIn: 'root'
})
export class MyDataService {
url = 'http://localhost:52813/api/Values/';
rootUrl = 'http://localhost:52813';

errorData:{};
Task:TaskVM;
TaskList:TaskVM[];


  constructor(private http:HttpClient) {
    
   }

   //get data from local json file
  getItems(){
    return this.http.get('assets/myData.json');
  }

 //registeration
  registerUser(user:UserVM){
    return this.http.post(this.rootUrl+'/Api/Account/Register',user);
  }
//login
  userLogin(userName, password){
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic'});
    return this.http.post(this.rootUrl + '/token', data, {headers: reqHeader});
  }
// get token method
  getToken(){
    return localStorage.getItem("userToken");
  }

  //get data from Web Api
  getTask():Observable<TaskVM[]>{
    return this.http.get<TaskVM[]>(this.url);
  }
  getTaskByID(QuoteID:number):Observable<TaskVM>{
    return this.http.get<TaskVM>(this.url+QuoteID);
  }
  postTask(task:TaskVM):Observable<TaskVM>{
    const httpOptions ={headers:new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<TaskVM>(this.url,task,httpOptions);
  }
  putTask(task:TaskVM):Observable<TaskVM>{
    const httpOptions ={headers:new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put<TaskVM>(this.url+task.Quote_,httpOptions);
  }

  deleteTask(QuoteID:number){

   // var  httpOptions = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete(this.url + QuoteID);
  }
}
