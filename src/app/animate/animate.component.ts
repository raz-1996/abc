import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {bounce, bounceOutUp} from 'ng-animate'

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void=>*', useAnimation(bounce)),
      transition('* => void', useAnimation(bounceOutUp)),
    ])
  ]
})
export class AnimateComponent implements OnInit {
  visable = true
  constructor() { }

  ngOnInit(): void {
  }

}



