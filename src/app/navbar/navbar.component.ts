import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // @HostBinding('attr.class') myClass='navbar-container';
  selectedItem: string = 'Home';

  navbarText: string[] = [
    'Home',
    'About',
    'Projects',
    'Blog',
    'Contact'
  ]

  constructor() { }

  highlightNavItem(text) {
    this.selectedItem = text;
  }
 

}
