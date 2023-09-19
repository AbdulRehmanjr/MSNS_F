import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  image:any
  role:string = ''
  ngOnInit (): void {
    try {
      this.image = JSON.parse(localStorage.getItem('user'))['userPicture'] ||undefined
      this.role = JSON.parse(localStorage.getItem('user'))['role']['authority'] || undefined
    } catch (error) {
      console.error(error)
    }

  }


}
