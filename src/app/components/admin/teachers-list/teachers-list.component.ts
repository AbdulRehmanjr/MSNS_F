import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Teacher } from 'src/app/classes/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit{

  editDialog:boolean = false
  addDialog:boolean = false
  teachers:Teacher[]= []
  teacher:Teacher
  placeholder:any
  file:File
  teacherForm:FormGroup


  constructor(private fb:FormBuilder,
    private teacherService:TeacherService,
    private message:MessageService){}

  ngOnInit(): void {
    this.fetchTeachers()
    this.createForm()

  }



  createForm() {
    this.teacherForm = this.fb.group({
      teacherName: ['', Validators.required],
      fatherName: ['', Validators.required],
      cnic: ['', Validators.required],
      qualification: ['',Validators.required],
      dateOfBirth: ['', Validators.required],
      contactNo: ['', Validators.required],
      address: ['', Validators.required],
      picture: ['']
    })
  }



  fetchTeachers(){
    this.teacherService.getAllTeachers().subscribe({
      next: (response: Teacher[]) => this.teachers = response,
      error: (error: any) => {},
      complete: () =>{}
    })
  }

  onChange(event:any){
    this.file = event.target['files'][0]

  }

  editSubmit(){

  }
  addTeacher(){
    this.addDialog = true
  }

  updateTeacher(teacher:any){
    this.teacher = teacher
    this.editDialog = true
  }

  onFileSelect(event:Event){
    this.placeholder = event.target['files'][0]
  }
  onSubmit(){

    let data = new Teacher()

    data.teacherName = this.teacherForm.get('teacherName').value
    data.fatherName = this.teacherForm.get('fatherName').value
    data.qualification = this.teacherForm.get('qualification').value
    data.cnic = this.teacherForm.get('cnic').value
    data.dateOfBirth = this.teacherForm.get('dateOfBirth').value
    data.contactNo = this.teacherForm.get('contactNo').value
    data.address = this.teacherForm.get('address').value

    this.teacherService.saveTeacher(data,this.file).subscribe({
      next: (response: Teacher) => {
        this.message.add({
          severity:'success',
          summary:'Success!',
        })
      },
      error: (error: any) => {
        this.message.add({
          severity:'warn',
          summary:'Failed!'
        })
      },
      complete: () => {
        this.addDialog = false
        this.fetchTeachers()
      }
    })
  }
}
