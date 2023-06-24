import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Section } from 'src/app/classes/section';

@Component({
  selector: 'app-list-section',
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css']
})
export class ListSectionComponent implements OnInit {

  addDialog: boolean = false
  editDialog: boolean = false
  section: Section
  sections: Section[] = [
    {
      sectionId: 1,
      sectionName: 'A'
    },
    {
      sectionId: 2,
      sectionName: 'B'
    },
    {
      sectionId: 3,
      sectionName: 'C'
    }
  ]



  constructor() { }
  ngOnInit(): void {

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
    if(form.value.sectionName ===''){
        return
    }
    this.addDialog = false



  }
}
