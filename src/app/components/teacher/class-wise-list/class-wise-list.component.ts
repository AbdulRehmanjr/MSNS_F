import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ClassInfo } from 'src/app/classes/class-info';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-class-wise-list',
  templateUrl: './class-wise-list.component.html',
  styleUrls: ['./class-wise-list.component.css']
})
export class ClassWiseListComponent  implements OnInit{


  classes:ClassInfo[]

  constructor(private classService:ClassService,private message:MessageService){}

  ngOnInit(): void {
    this.fetchClasses()
  }

  fetchClasses(){
    this.classService.getAllClasses().subscribe({
      next: (response: ClassInfo[]) => this.classes = response,
      error: (error: any) => this.message.add({
        severity:'warn',
        summary:'Failed',
        detail:`${error.error}`

      }),
      complete: () => {}
    })
  }

  addStudent(){

  }

}
