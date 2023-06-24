import { Component } from '@angular/core';
import { ClassInfo } from 'src/app/classes/class-info';

@Component({
  selector: 'app-class-wise-list',
  templateUrl: './class-wise-list.component.html',
  styleUrls: ['./class-wise-list.component.css']
})
export class ClassWiseListComponent {

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
}
