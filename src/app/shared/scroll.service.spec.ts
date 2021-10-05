import { ScrollService } from './scroll.service';
import { fakeAsync, tick } from '@angular/core/testing';
describe('ScrollService', () => {
  
  let service: ScrollService; 

  it('should be work', fakeAsync(() => {
    service =  new ScrollService();
    expect(service).toBeTruthy(); 

    class FakeHTMLElement {
       key = { onclick: (arg: MouseEvent) => {},  ontouch: (arg: MouseEvent) => {} }
       offsetTop = 999;
    }

    class FakeDocument { 
      getElementById = (arg: string): FakeHTMLElement => new FakeHTMLElement();
      getElementsByTagName = (arg: string): HTMLElement[] => 
        [ new FakeHTMLElement() as unknown as HTMLElement ];
    } 

    class FakeWindow { 
      document = new FakeDocument() as unknown as Document; 
      isTrue: boolean = false;
      pageYOffset: number = 0;
      clearTimeout(arg: number): void {};
      scrollTo = (x: number, y: number): number => this.pageYOffset = y; 
      setTimeout = (fn: Function, num: number): void =>  {
        
        if ( num == 9 && !this.isTrue ) {
           this.isTrue = true; 
           fn.call(this);
        }
        else if ( num == 1 ) { 
           fn.call(this);
        } 
        else {
          null;
        }
      }

    }
    
    let w = new FakeWindow() as unknown as Window;
    
    service.goToR(w);
    service.goToRegister({} as unknown as Window);
    service.goToRegister(w);
    service.checkTarget({} as unknown as EventTarget, {} as unknown as Window);
    service.checkTarget({tagName: 'A' } as unknown as EventTarget, {} as unknown as Window);
    service.setListeners(w);
    
    const fackeElem = window.document.createElement('a') as HTMLElement; 
    window.document.body.appendChild(fackeElem);
    service.setListeners(window);
    fackeElem.dispatchEvent(new Event('click'));
    tick()
    
    spyOn(service, 'getY').and.returnValue(undefined);
    service.goToRegister(w);

  }));
});