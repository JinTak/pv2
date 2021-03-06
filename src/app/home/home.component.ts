import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @HostBinding('attr.class') cssClass = 'home-container';
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  lightOn: boolean = false;

  ngOnInit() {
    this.myParams = {
      particles: {
        'number': {
          'value': 50,
          'density': {
            'enable': false,
            'value_area': 800
          }
        },
        'color': {
          'value': '#fff'
        },
        'shape': {
          'type': 'star',
          'stroke': {
            'width': 0,
            'color': '#00000'
          }
        },
        'opacity': {
          'value': 0.5,
          'random': false,
          'anim': {
            'enable': false,
            'speed': .3,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 5,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 20,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#fff',
          'opacity': 0.4,
          'width': 1.3
        },
        'move': {
          'enable': true,
          'speed': 6,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'grab'
          },
          'onclick': {
            'enable': true,
            'mode': 'push'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 400,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 8,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 3
          },
          'remove': {
            'particles_nb': 10
          }
        }
      }
    };
  }


  ngAfterViewInit() {
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

  }

  lightSwitch() {
    this.lightOn = !this.lightOn;
  }
}
