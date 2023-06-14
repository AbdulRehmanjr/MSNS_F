import { Component, OnInit } from '@angular/core';
import { ClassInfo } from 'src/app/classes/class-info';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {


  addDialog:boolean = false
  editDialog:boolean= false
  classInfo: ClassInfo
  classes: ClassInfo[] = [
    {
      classId: 1,
      className: 'One'
    },
    {
      classId: 2,
      className: 'Two'
    }, {
      classId: 3,
      className: 'Three'
    }, {
      classId: 4,
      className: 'Four'
    },
    {
      classId: 4,
      className: 'Four'
    }, {
      classId: 4,
      className: 'Four'
    }, {
      classId: 4,
      className: 'Four'
    }, {
      classId: 4,
      className: 'Four'
    }, {
      classId: 4,
      className: 'Four'
    }, {
      classId: 4,
      className: 'Four'
    },
  ]
  constructor() {

  }

  ngOnInit(): void {

  }

  addClass(){
    this.addDialog=true
  }
  updateClass(classInfo:ClassInfo){

    this.classInfo = classInfo
    this.editDialog = true

  }
  editSubmit(){

    this.editDialog = false
  }

  hideDialog(){
    this.addDialog = false
  }
}
