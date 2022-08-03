import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  template: `
      <section class="main" [ngStyle]="{'background-color': color}">

      </section>
    `,
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
