import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/auth/auth-guard.service';

@Component({
  selector: 'salv-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authGuard: AuthGuardService) { }
  showSidebar: boolean = false
  ngOnInit() {
    this.showSidebar = this.authGuard.isLoggedIn()
    if(this.showSidebar){
      let selector = document.querySelector("body")
      selector.setAttribute("class", "hold-transition skin-green sidebar")
    }
  }

}
