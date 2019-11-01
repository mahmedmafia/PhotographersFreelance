import { Component, OnInit, Input } from '@angular/core';
import { Photographer } from 'src/app/services/photographer.model';

@Component({
  selector: 'app-photographer-panel',
  templateUrl: './photographer-panel.component.html',
  styleUrls: ['./photographer-panel.component.css']
})
export class PhotographerPanelComponent implements OnInit {
  @Input() photographer:Photographer;
  constructor() { }

  ngOnInit() {
  }

}
