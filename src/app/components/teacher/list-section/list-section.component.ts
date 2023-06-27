import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Section } from 'src/app/classes/section';
import { SectionService } from 'src/app/services/section.service';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent implements OnInit {

  addDialog: boolean = false
  editDialog: boolean = false
  section: Section
  sections: Section[]



  constructor(private sectionService:SectionService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.fetchSections()
  }


  fetchSections(){
    this.sectionService.getAllSections().subscribe({
      next: (response: Section[]) => this.sections = response,
      error: (error: any) => this.messageService.add({
        severity:'warn',
        summary:'Failed!!',
        detail:`${error.error}`
      }),
      complete: () => {}
    })
  }
  hideDialog() {
    this.addDialog = false
  }

  editSubmit() {
    this.editDialog = false
  }

  updateSection(section: Section) {
    this.section = section
    this.editDialog = true
  }
  addSection() {
    this.addDialog = true
  }
  addSubmit(form: NgForm) {
    const name = form.value.sectionName
    if( name ==='' || name ===' '){
        return
    }
    let data = new Section
    data.sectionName = name
    this.sectionService.createSection(data).subscribe({
      next: (response: Section) => {},
      error: (error: any) => this.messageService.add({
        severity:'warn',
        summary:'Failed!!',
        detail:`${error.error}`
      }),
      complete: () => {this.fetchSections()}
    })
    this.addDialog = false
  }
}
