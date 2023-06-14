import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Student} from 'src/app/classes/Student';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {


  student: Student
  addDialog: boolean = false
  editDialog: boolean = false


  students:Student[] = [
    {
      studentId: 1,
      rollNumber: "A001",
      studentName: "John Doe",
      fatherName: "Michael Doe",
      bForm: "123456789",
      dateOfBirth: "2000-01-01",
      contactPhone: "1234567890",
      address: "123 Main Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 2,
      rollNumber: "A002",
      studentName: "Jane Smith",
      fatherName: "David Smith",
      bForm: "987654321",
      dateOfBirth: "1999-12-31",
      contactPhone: "0987654321",
      address: "456 Elm Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },

    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },
    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },


    {
      studentId: 3,
      rollNumber: "A003",
      studentName: "Alex Johnson",
      fatherName: "Peter Johnson",
      bForm: "543216789",
      dateOfBirth: "2001-05-10",
      contactPhone: "5678901234",
      address: "789 Oak Street, City",
      picture: "https://source.unsplash.com/random/800x600",
    },

  ];

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {

  }


  updateStudent(student: Student){
    this.student = student
    this.editDialog = true
  }

  hideDialog(){
    this.addDialog=false
  }
  editSubmit() {
  }
  addStudent(){
    this.addDialog = true
  }

}

