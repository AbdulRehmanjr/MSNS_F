import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'teacher-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent  implements OnInit{

  studentForm:FormGroup

  @Output()
  studentAdded = new EventEmitter<boolean>()
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.studentForm = this.fb.group({
      studentId: [0, Validators.required],
      rollNumber: ['', Validators.required],
      studentName: ['', Validators.required],
      fatherName: ['', Validators.required],
      bForm: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      contactPhone: ['', Validators.required],
      address: ['', Validators.required],
      picture: ['']
    })
  }

  onSubmit(){

    this.studentAdded.emit(true)
  }
}
