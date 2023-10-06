import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarOpen: boolean;
  selectedLinkIndex: number = 0;
  @Output() sidebarToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  toggleSidebar(): void {
    // Emit an event to the parent component to toggle the sidebar
    this.sidebarToggled.emit(!this.isSidebarOpen);
  }
}
