import { CheckService } from './shared/check.service';
import { Component } from '@angular/core';  
import { FirstPageService } from './first-page.service';
import { LazyImgService } from './lazy-img.service';
import { ScrollService } from './shared/scroll.service';
import { SidebarTriggerService } from './shared/sidebar-trigger.service';
type HandleEvents = (e: Event) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  firstValue: boolean = true;
  title: string = 'frontend';
  
  constructor(
    private checkService: CheckService,
    private firstPage: FirstPageService,
    private lazyImg: LazyImgService,
    private scrollService: ScrollService,
    private sidebarTriggerService: SidebarTriggerService) { 
      this.mainAppCompMethod(checkService.nativeWindow);
  }
  
  getCustomersComponentByEvent(win: Window): void {
    win.onclick = this.handler(win);
    win.onscroll = this.handler(win);
  }
  
  handler(win: Window): HandleEvents { 
    
    return (e: Event): void => {
      win.onclick = null;
      win.onscroll = null;
      
      const link: HTMLLinkElement = win.document.createElement('link');
      link.setAttribute('rel', 'stylesheet'); 
      link.setAttribute('href', 'assets/delay.style.css');
      link.setAttribute('type', 'text/css');
      link.setAttribute('as', 'style');
      win.document.head.appendChild(link);
                         
      Promise.resolve(this.firstPage.router.navigate(['customers']))
        .then((): void | null => this.scrollService.checkTarget(<EventTarget>e.target, win))
        .then((): void => this.scrollService.setListeners(win));
                   
      this.firstValue = false; 
    }
  }

  mainAppCompMethod(win: Window | null): void {
    
    if (win) {
        this.firstPage.set(win);
        this.lazyImg.showImg(win);
        this.firstValue == true ? this.getCustomersComponentByEvent(win) : null
    }
  
  }

  showSidebarMenu = (): number | void => this.firstValue == true ? 
    (<Window>this.checkService.nativeWindow).setTimeout(
      (): void => this.sidebarTriggerService.setInitial(true), 999
    )
      :
    this.sidebarTriggerService.setInitial(true);

}
