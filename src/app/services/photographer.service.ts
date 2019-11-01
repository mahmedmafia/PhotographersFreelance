import { Injectable } from '@angular/core';
import { Photographer } from './photographer.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotographerService {
  onPhotographersChange = new Subject<Photographer[]>();
  private photographers: Photographer[] = [
    new Photographer(2, 'testPhotographer', 'I Love Photography', ['hello', 'portrait'], '', 'Giza'),
    new Photographer(3, 'mahmed', 'I Love Photography', ['hello', 'portrait'], '', 'Giza'),
    new Photographer(4, 'mahmed', 'I Love Photography', ['hello', 'portrait'], '', 'Giza'),
    new Photographer(5, 'mahmed', 'I Love Photography', ['hello', 'portrait'], '', 'Giza'),

  ];
  getPhotographers(){
    return this.photographers.slice();
  }
  getPhotographer(id:number){
    var photographer=this.photographers.find(x=>x.id === id);
    return photographer;
  }
  constructor() {}
}
