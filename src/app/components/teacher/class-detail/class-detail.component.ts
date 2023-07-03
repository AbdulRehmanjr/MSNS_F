import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/classes/student';
import { StudentClass } from 'src/app/classes/studentclass';
import { StudentClassService } from 'src/app/services/student-class.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {

  addDialog: boolean = false
  studentsClass: StudentClass[]
  students: Student[]
  selectedStudents: Student[] = []
  classId: number

  constructor(private studentService: StudentService
    , private scService: StudentClassService,
    private route: ActivatedRoute,
    private message: MessageService
  ) { }

  ngOnInit(): void {
    this.classId = +this.route.snapshot.paramMap.get('classId');
    this.fetchStudents()
  }

  addStudent() {
    this.addDialog = true
  }

  /**
   * The function fetches all students in a class using the class ID.
   */
  fetchStudents() {
    this.scService.getAllStudentsByClassId(this.classId).subscribe({
      next: (response: StudentClass[]) => this.studentsClass = response,
      error: (_error: any) => { },
      complete: () => { }
    })
  }


  /**
   * The function "addStudentToClass" adds selected students to a class and displays success or error
   * messages accordingly.
   */
  addStudentToClass() {

    if (this.selectedStudents.length != 0) {

      this.scService.addStudentInClass(this.selectedStudents, this.classId).subscribe({
        next: (response: any) => this.message.add({
          severity: 'success',
          summary: 'Student Added',
          detail: `${response}`
        }),
        error: (error: any) => this.message.add({
          severity: 'warn',
          summary: 'Error',
          detail: `${error.error}`
        }),
        complete: () => {
          this.selectedStudents = []
        }
      })
    }
  }
  /**
   * @param name
   */
  /**
   * The function searches for students by name and assigns the response to the "students" variable.
   * @param {string} name - The name parameter is a string that represents the name of the student you
   * want to search for.
   */
  searchStudent(name: string) {
    this.studentService.getAllStudentsByStudentName(name).subscribe({
      next: (response: Student[]) => this.students = response,
      error: (_error: any) => { },
      complete: () => {

      }
    })
  }
}
