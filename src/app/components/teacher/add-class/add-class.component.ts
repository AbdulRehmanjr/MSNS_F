import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'teacher-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  classForm:FormGroup

  @Output()
  classAdded = new EventEmitter<boolean>()
  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.createForm()
  }

  createForm(){

    this.classForm = this.fb.group({
      className: new FormControl('',[Validators.required])
    })
  }
  onSubmit(){

    this.classAdded.emit(true)
  }

}
