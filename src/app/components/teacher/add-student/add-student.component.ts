import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Student } from 'src/app/classes/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'teacher-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm: FormGroup;
  file: File | null = null; // Initialize to null for clarity

  @Output()
  studentAdded = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.studentForm = this.fb.group({
      studentName: ['', Validators.required],
      fatherName: ['', Validators.required],
      bForm: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      contactPhone: ['', Validators.required],
      address: ['', Validators.required],
      picture: [null, Validators.required] // Ensure picture is required
    });
  }

  onFileSelect(event: Event) {
    this.file = event.target['files'][0];
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const student = this.studentForm.value as Student; // Leverage type casting

      this.studentService.createStudent(this.file, student)
        .subscribe({
          next: (response: Student) => {
            this.message.add({
              severity: 'success',
              summary: 'Success!!!',
              detail: 'Student Saved'
            });
          },
          error: (error: any) => {
            this.message.add({
              severity: 'warn',
              summary: 'Failed!!!',
              detail: 'Student Saving Failure: ' + error.message
            }); // Display actual error message
          },
          complete: () => {
            this.studentAdded.emit(true);
            this.studentForm.reset(); // Clear form after submission
          }
        });
    } else {
      this.message.add({
        severity: 'warn',
        summary: 'Invalid Form Data',
        detail: 'Please complete all required fields.'
      });
    }
  }
}
