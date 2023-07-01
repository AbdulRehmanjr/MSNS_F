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


  placeholder: any
  student: Student
  addDialog: boolean = false
  editDialog: boolean = false
  file: File
  students: Student[]

  constructor(private fb: FormBuilder, private studentService: StudentService
    , private message: MessageService) { }

  ngOnInit(): void {

    this.fetchStudents()
  }
  onChange($event: Event) {
    this.file = $event.target['files'][0]
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.placeholder = e.target.result;
    };
    reader.readAsDataURL($event.target['files'][0])
  }

  fetchStudents() {
    this.studentService.getAllStudents().subscribe({
      next: (response: Student[]) => this.students = response,
      error: (error: any) => this.message.add({
        severity: 'warn',
        summary: 'Failed!!!'
      }),
      complete: () => { }
    })
  }
  updateStudent(student: Student) {
    this.student = student
    this.editDialog = true
  }


  editSubmit() {
    if(this.file!=undefined){
      this.studentService.updateStudentBlob(this.file,this.student).subscribe({
        next: (response: Student) => {
          this.message.add({
            severity: 'success',
            summary: 'Success!!'
          })
        },
        error: (error: any) => this.message.add({
          severity: 'warn',
          summary: `${error.error}`
        }),
        complete: () => {
          this.editDialog = false
          this.fetchStudents()
        }
      })
    }
    else{
      this.studentService.updateStudent(this.student).subscribe({
        next: (response: Student) => {
          this.message.add({
            severity: 'success',
            summary: 'Success!!'
          })
        },
        error: (error: any) => this.message.add({
          severity: 'warn',
          summary: `${error.error}`
        }),
        complete: () => {
          this.editDialog = false
          this.fetchStudents()
        }
      })
    }

  }

  //* from add-student component
  addStudent() {
    this.addDialog = true
  }
  hideDialog() {
    this.fetchStudents()
    this.addDialog = false
  }
}

