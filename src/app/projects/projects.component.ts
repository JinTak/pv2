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

        query(':enter', stagger('400ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
        ]))]), { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent {

  constructor() {}

  projects = [
    {
      title: 'Easy Mass',
      img: 'EasyMass',
      url: 'https://easymass.herokuapp.com/',
      github: 'https://github.com/JinTak/Mass-React',
      description: 'Calorie / Macro tracking app to help with fitness goals',
      tech: 'React JS | Express JS | Node JS | Postgres'
    },
    {
      title: 'Holistic Blog',
      img: 'Holistic',
      url: 'https://holistic-blog.herokuapp.com/',
      github: 'https://github.com/JinTak/Holistic-Blog',
      description: 'Blog/ e-commerce prototype for holistic products',
      tech: 'Angular 5 | Node JS | Express JS | MongoDB | Postgres'
    },
    {
      title: 'Denver Nuggets Fansite',
      img: 'Nuggets',
      url: 'https://jintak.github.io/nuggets/',
      github: 'https://github.com/JinTak/nuggets',
      description: 'Denver Nuggets Fansite because I love the Nuggets',
      tech: 'HTML5 | CSS3 | SCSS '
    },
    {
      title: 'Skycast',
      img: 'Skycast',
      url: 'https://sky-cast-1.herokuapp.com/',
      github: 'https://github.com/JinTak/dark-sky',
      description: 'Simple, sleek, modern weather interface',
      tech: 'React JS | Express JS | Node JS | Postgres'
    },
    {
      title: 'Colorado Springs Korean American School',
      img: 'CSKAS',
      url: 'http://cskas.nfshost.com/',
      github: 'http://cskas.nfshost.com/',
      description: 'Website for non profit Korean-American school',
      tech: 'HTML5 | CSS3 | Javascript'
    },
    {
      title: 'Space Racer II',
      img: 'SpaceRacer2',
      url: 'https://jintak.github.io/Space-Racer-2/',
      github: 'https://github.com/JinTak/Space-Racer-2',
      description: 'Game where you shoot asteroids to earn bitcoins!',
      tech: 'HTML5 | CSS3 | Javascript'
    }
  ];

}
