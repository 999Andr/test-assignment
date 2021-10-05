import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ModalService { 
  
  doModal: Subject<boolean> = new Subject<boolean>();
  
  onDestroy: Subject<void> = new Subject<void>();

  setModal = (arg: boolean): void => this.doModal.next(arg);

}