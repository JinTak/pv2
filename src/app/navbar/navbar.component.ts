import { Component } from '@angular/core';
import { trigger,stagger,style,transition,animate,keyframes,query } from '@angular/animations';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [

    trigger('navItems', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('350ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ])) ]), {optional: true})
      ])
    ])
  ]
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
