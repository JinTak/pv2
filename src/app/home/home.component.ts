import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import { trigger,stagger,style,transition,animate,keyframes,query,state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  // animations: [

    // trigger('profilePic', [
    //   transition('* => *', [
    //     query(':enter', style({opacity: 0}), {optional: true}),

    //     query(':enter', stagger('300ms', [
    //       animate('1s ease-in', keyframes([
    //         style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
    //         style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
    //         style({opacity: 1, transform: 'translateY(0)', offset: 1}),
    //       ])) ]), {optional: true})
    //   ])
    // ])

    // trigger('profilePic', [
    //   state('none, void', style({opacity: 0, transform: 'translateY(-75%)', offset: 0})),
    //   state('maximum', style({opacity: 1, transform: 'translateY(0)', offset: 1})),
    //   transition('none => maximum', animate('100ms'))
    // ])
  // ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @HostBinding('attr.class') cssClass = 'home-container';
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  state: string = 'none';

  ngOnInit() {
      this.myStyle = {
          'position': 'fixed',
          'width': '100%',
          'height': '100%',
          'z-index': 10,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
      };
 
  this.myParams = {
          particles: {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#0064ff"
            },
            "shape": {
              "type": "star",
              "stroke": {
                "width": 0,
                "color": "#00000"
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": .3,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#fff",
              "opacity": 0.4,
              "width": 1.3
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 3
              },
              "remove": {
                "particles_nb": 10
              }
            }
          }
      }
  };

  ngAfterViewInit() {
    this.state = 'maximum';
  }

}
