import { Component, OnInit, HostListener } from '@angular/core';
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
export class NavbarComponent implements OnInit {
  selectedItem: string = 'Home';
  menu = './assets/hamburger.svg';
  hamburgerMenuStatus: string;
  hamburgerMenuOpen = 'flex';
  hamburgerMenuClose = 'none';
  innerWidth: any;  
  navbarText: string[] = [
    'Home',
    'About',
    'Projects',
    'Blog',
    'Contact'
  ]
  @HostListener('window:resize', ['$event'])

  onResize(event) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth > 1100) {
      this.hamburgerMenuStatus = this.hamburgerMenuOpen;
      this.menu = './assets/hamburger.svg';
    } else if(this.innerWidth <= 1100) {
      this.hamburgerMenuStatus = this.hamburgerMenuClose;
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 1100) {
      this.hamburgerMenuStatus = this.hamburgerMenuClose;
    }
  }

  constructor() {
    this.hamburgerMenuStatus = this.hamburgerMenuOpen;
  }

  highlightNavItem(text) {
    this.selectedItem = text;
    if (this.innerWidth > 1100) {
      this.hamburgerMenuStatus = this.hamburgerMenuOpen;
      this.menu = './assets/hamburger.svg';
    } else if (this.innerWidth <= 1100) {
      this.hamburgerMenuStatus = this.hamburgerMenuClose;
      this.menu = './assets/hamburger.svg';      
    }
  }

  openNavBar() {
    console.log(this.hamburgerMenuStatus)
    if(this.hamburgerMenuStatus == this.hamburgerMenuClose){
      this.hamburgerMenuStatus = this.hamburgerMenuOpen;
      this.menu = './assets/close.svg';
    } else {
      this.hamburgerMenuStatus = this.hamburgerMenuClose;     
      this.menu = './assets/hamburger.svg'; 
    }
  }

}
