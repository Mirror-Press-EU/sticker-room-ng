import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom-panel',
  templateUrl: './zoom-panel.component.html',
  styleUrls: ['./zoom-panel.component.scss']
})
export class ZoomPanelComponent implements OnInit {
  scale:number = 100;
  open:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  toggleVisible( ) {
    this.open = !this.open;
  }
}
