import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScrollService { 
    
  timerId!: number;

  getY = (w: Window): number | undefined | null => 
     (<HTMLElement>w.document.getElementById('register')).offsetTop;
  
  goToR = (w: Window): void => {
    clearTimeout(this.timerId);
    let y = <number>this.getY(w);
    
    if (y == w.pageYOffset) {  
      clearTimeout(this.timerId);
      return;
    } else if (y > w.pageYOffset) {
      Promise.resolve(w.scrollTo(0, w.pageYOffset + 45)) 
        .then((): number => this.timerId = w.setTimeout((): void => this.goToR(w), 1));
    } else {
      w.scrollTo(0, y); 
      clearTimeout(this.timerId);
      return;
    }
   
  }

  goToRegister(w: Window): void {
    
    try {
      this.getY(w) ? this.goToR(w) : w.setTimeout((): void => this.goToRegister(w), 9); 
    } 
    catch(_) {};
  } 

  checkTarget = (arg: EventTarget, w: Window): void | null => 
    (<HTMLElement>arg).tagName == 'A' ? this.goToRegister(w) : null

  setListeners = (w: Window): void => 
    Object.keys(w.document.getElementsByTagName("a"))
      .forEach((key: string): void => {
        (<any>w.document.getElementsByTagName("a"))[key].onclick = (): void => this.goToRegister(w);
                
      });
  
   
} 