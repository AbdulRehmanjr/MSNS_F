import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
onChange($event: Event) {
throw new Error('Method not implemented.');
}

  placeholder:any
  student: Student
  addDialog: boolean = false
  editDialog: boolean = false


  students:Student[]

  constructor(private fb:FormBuilder,private studentService:StudentService
    ,private message:MessageService){}

  ngOnInit(): void {

    this.fetchStudents()
  }


  fetchStudents(){
    this.studentService.getAllStudents().subscribe({
      next: (response: Student[]) => this.students = response,
      error: (error: any) => this.message.add({
        severity:'warn',
        summary:'Failed!!!'
      }),
      complete: () => {}
    })
  }
  updateStudent(student: Student){
    this.student = student
    this.editDialog = true
  }


  editSubmit() {
  }

  //* from add-student component
  addStudent(){
    this.addDialog = true
  }
  hideDialog(){
    this.fetchStudents()
    this.addDialog=false
  }
}

