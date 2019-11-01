import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photographer } from 'src/app/services/photographer.model';
import { PhotographerService } from 'src/app/services/photographer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photographer-list',
  templateUrl: './photographer-list.component.html',
  styleUrls: ['./photographer-list.component.css']
})
export class PhotographerListComponent implements OnInit,OnDestroy {
  

  private photographers:Photographer[];
  private photographersChanged:Subscription;
  constructor(private photographerServe:PhotographerService) { }

  ngOnInit() {
    this.photographersChanged=this.photographerServe.onPhotographersChange.subscribe(result=>{
        this.photographers=result;
    });
    this.photographers=this.photographerServe.getPhotographers();
  }
  ngOnDestroy(): void {
    this.photographersChanged.unsubscribe();
  }
  get Photographers(){
    return this.photographers;
  }
  
}
