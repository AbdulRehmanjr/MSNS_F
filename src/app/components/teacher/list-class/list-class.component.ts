import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ClassInfo } from 'src/app/classes/class-info';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {


  addDialog:boolean = false
  editDialog:boolean= false
  classInfo: ClassInfo
  classes: ClassInfo[]
  constructor(
    private classService:ClassService,
    private message:MessageService
  ) {}

  ngOnInit(): void {
    this.fetchClasses()
  }

  //* http related functions
  fetchClasses(){
    this.classService.getAllClasses().subscribe({
      next: (response: ClassInfo[]) => {
          this.classes = response
      },
      error: (error: any) => {
        this.message.add({
          severity:'warn',
          summary:'Not Found',
          detail:`${error.error}`
        })
        console.log(error)
      },
      complete: () => {

      }
    })
  }

  //* dialog related functions
  addClass(){
    this.addDialog=true
  }
  updateClass(classInfo:ClassInfo){

    this.classInfo = classInfo
    this.editDialog = true

  }
  editSubmit(){

    this.editDialog = false
  }

  hideDialog(){
    this.addDialog = false
  }
}
