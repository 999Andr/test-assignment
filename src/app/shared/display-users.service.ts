import { CheckService } from './check.service';
import { delay, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { fromEvent, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})

export class DisplayUsersService { 
  
  onDestroy: Subject<void> = new Subject<void>();  
   
  window: Window | null;  
  
  constructor(private checkService: CheckService) { 
      this.window = checkService.nativeWindow 
  }

  getInnerWidth = (w: Window): number => w.innerWidth ;
  getElClWidth = (w: Window): number => w.document.documentElement.clientWidth;
  getBodyClWidth = (w: Window): number => w.document.body.clientWidth;
  
  getViewport = (w: Window): number =>
    ( this.getInnerWidth(w) || this.getElClWidth(w) || this.getBodyClWidth(w) );

  getUsers$ = (): Observable<number> => fromEvent(<Window>this.window, 'resize')
                      .pipe( 
                        delay(1000),
                        map(() => this.getViewport(<Window>this.window) < 768 ? true : false ),
                        distinctUntilChanged(),
                        map(() => this.getViewport(<Window>this.window)), 
                        takeUntil(this.onDestroy)
                      ) 
}

