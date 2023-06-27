import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/classes/student';
import { StudentClass } from 'src/app/classes/studentclass';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  addDialog:boolean = false
  studentClass:StudentClass[]= [
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "Aohn Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      },
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },
    {
      scId: 1,
      class: {
        classId: 1,
        className: "Mathematics",
      },
      student: {
        studentId: 1,
        rollNumber: "A001",
        studentName: "John Doe",
        fatherName: "Michael Doe",
        bForm: "1234567890",
        dateOfBirth: "2000-01-01",
        contactPhone: "1234567890",
        address: "123 Main Street",
        picture: "https://example.com/picture.jpg",
      }
    },


  ]

  students: Student[]
  constructor(){

  }
  ngOnInit(): void {

  }

  addStudent(){
    this.addDialog = true
  }

  hideDialog(){

  }
  searchStudent(name:string){
      this.studentClass.forEach(student =>{
        if(student.student.studentName == name){
          this.students.push(student.student)
        }
      })
  }
}
