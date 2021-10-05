import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LazyImgService {

  setImg = (w: Window): void => (<HTMLDivElement>w.document.getElementById('removeStyle')).removeAttribute("style");
  
  showImg = (win: Window): number => win.setTimeout(((): void => this.setImg(win)), 2700);

}