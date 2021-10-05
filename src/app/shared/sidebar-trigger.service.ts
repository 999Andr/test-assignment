import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class SidebarTriggerService { 
  
  isInitial: Subject<boolean> = new Subject<boolean>();

  onDestroy: Subject<void> = new Subject<void>();
 
  setInitial = (arg: boolean): void => this.isInitial.next(arg);

}