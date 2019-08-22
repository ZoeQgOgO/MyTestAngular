import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';  
import {TaskVM} from '../shared/task.model';
import { MyDataService } from '../my-data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title:string ='Tasks from WebAPI';
  taskForm:any;
  allTasks:Observable <TaskVM[]>;
  QuoteID =null;
  dataSaved = false;
  searchText;

  taskIdUpdate = null;  
  message = null;  

  myTask = {};


  constructor(private service: MyDataService, private formbuilder:FormBuilder) { }

  ngOnInit():void {
    //taskForm
    this.taskForm = this.formbuilder.group({
      Quote_Type:['',[Validators.required]],
      Quote_:['',[Validators.required]],
      Contact:['',[Validators.required]],
      Task_Content:['',[Validators.required]],
      Due_Date:['',[Validators.required]],
      Task_Type:['',[Validators.required]],
    });
    this.getAllTasks();
  }

  //get tasks list
  getAllTasks(){ 
    this.allTasks = this.service.getTask();
  }

  onFormSubmit() {  
    this.dataSaved = false;  
    const task = this.taskForm.value;  
    this.postTask(task);  
    this.taskForm.resetForm();  
  }  
  //load data and edit 
  loadTaskToEdit(QuoteID:number){
    this.service.getTaskByID(QuoteID).subscribe(
      (task)=>{
      this.message =null;
      this.dataSaved = false;
      this.QuoteID = task.Quote_;

      this.taskForm.controls['Quote_Type'].setValue(task.Quote_Type);
      this.taskForm.controls['Quote_'].setValue(task.Quote_);
      this.taskForm.controls['Contact'].setValue(task.Contact);
      this.taskForm.controls['Task_Content'].setValue(task.Task_Content);
      this.taskForm.controls['Due_Date'].setValue(task.Due_Date);
      this.taskForm.controls['Task_Type'].setValue(task.Task_Type);
      });
  }



  //create task
  postTask(task:TaskVM){
    if(this.taskIdUpdate == null){
      this.service.postTask(task).subscribe(
        ()=>{
          this.dataSaved =true;
          this.message = 'Saved Successfully';
          this.getAllTasks();
          this.taskIdUpdate =null;
          this.taskForm.resetForm();
        });
    }else{
      this.service.putTask(task).subscribe(
        ()=>{
          this.dataSaved =true;
          this.message = 'Update Successfully';
          this.getAllTasks();
          this.taskIdUpdate =null;
          this.taskForm.resetForm();
        });
      return null;
    }
  }

  //delete task
  deleteTask(QuoteID:number){
    //debugger
    this.service.deleteTask(QuoteID).subscribe(      
      data=>{  
        console.log(data);       
        this.dataSaved = true;
        this.message = 'Delete Successfull';
        this.getAllTasks();
        this.taskIdUpdate =null;
        this.taskForm.reset();
    })
  }

  resetForm(){
    this.taskForm.reset();  
    this.message = null;  
    this.dataSaved = false;  
  }

   //sorting
   key: string = ''; //set default
   reverse: boolean = false;
   sort(key){
     this.key = key;
     this.reverse = !this.reverse;
   }

   //paging
   p: number = 1;

}


