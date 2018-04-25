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
  hi = 'jin';

  projects = [
    {
      title: 'Easy Mass',
      img: 'EasyMass',
      url: 'https://easymass.herokuapp.com/'
    },
    {
      title: 'Holistic Blog',
      img: 'Holistic',
      url: 'https://holistic-blog.herokuapp.com/'
    },
    {
      title: 'Denver Nuggets Fansite',
      img: 'Nuggets',
      url: 'https://jintak.github.io/nuggets/'
    },
    {
      title: 'Skycast',
      img: 'Skycast',
      url: 'https://sky-cast-1.herokuapp.com/'
    },
    {
      title: 'Colorodo Springs Korean American School',
      img: 'CSKAS',
      url: 'http://cskas.nfshost.com/'
    },
    {
      title: 'Space Racer II',
      img: 'SpaceRacer2',
      url: 'https://jintak.github.io/Space-Racer-2/'
    }

  ];

}
