import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClassInfo } from 'src/app/classes/class-info';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'teacher-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  classForm: FormGroup

  @Output()
  classAdded = new EventEmitter<boolean>()
  constructor(private fb: FormBuilder,
    private message:MessageService,
    private classService: ClassService) { }
  ngOnInit(): void {
    this.createForm()
  }

  createForm() {

    this.classForm = this.fb.group({
      className: new FormControl('', [Validators.required])
    })
  }
  onSubmit() {
    const name = this.classForm.controls['className'].value
    if(name ==="" || name===' '){
      return
    }
    let data = new ClassInfo()
    data.className =name

    this.classService.createClass(data).subscribe({
      next: (response: ClassInfo) => {
        this.message.add({
          severity:'success',
          summary:'SucessFull',
          detail:'Class Created Successfully'
        })
      },
      error: (error: any) => {
        this.message.add({
          severity:'error',
          summary:'Error',
          detail:`${error.error}`
        })
      },
      complete: () => {
        this.classAdded.emit(true)
      }
    })


  }

}
