import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  image:any
  ngOnInit (): void {
      this.image = JSON.parse(localStorage.getItem('user'))['userPicture']

  }
}
