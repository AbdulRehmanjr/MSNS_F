import { Component } from '@angular/core';

@Component({
  selector: 'teacher-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  preventNavigation(event: Event) {
    event.preventDefault();
  }
}
