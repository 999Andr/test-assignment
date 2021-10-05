import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CheerfulService { 
  
  doValues: Subject<boolean> = new Subject<boolean>();

  onDestroy: Subject<void> = new Subject<void>();

  setValues = (arg: boolean): void => this.doValues.next(arg);
  
}