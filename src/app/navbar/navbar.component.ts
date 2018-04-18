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

        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateX(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1}),
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
