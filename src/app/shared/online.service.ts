import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class OnlineService { 
  
  doOnline: Subject<boolean> = new Subject<boolean>();
  
  onDestroy: Subject<void> = new Subject<void>();

  setOnline = (arg: boolean): void => this.doOnline.next(arg);

}