import { Component } from '@angular/core';
import { trigger, stagger, style, transition, animate, keyframes, query } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [

    trigger('projectCards', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))]), { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent {

  constructor() { }
  hi = 'jin'

  projects = [
    {
      title: 'Easy Mass',
      img: 'EasyMass'
    },
    {
      title: 'Holistic Blog',
      img: 'Holistic'
    },
    {
      title: 'Denver Nuggets Fansite',
      img: 'Nuggets'
    },
    {
      title: 'Skycast',
      img: 'Skycast'
    },
    {
      title: 'Colorodo Springs Korean American School',
      img: 'CSKAS'
    },
    {
      title: 'Space Racer II',
      img: 'SpaceRacer2'
    }

  ];

}
