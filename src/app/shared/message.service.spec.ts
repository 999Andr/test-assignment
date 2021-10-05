import { MessageService } from './message.service';

describe('MessageService', () => {
  
  let service: MessageService = new MessageService();
  
  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });

  it('should be work', () => {
    
    class FakeLocation {
      reload = () => null
    }

    class FakeDocument {
      constructor(private title: string) {}
      location = new FakeLocation();
      getElementsByTagName = (arg: string ) =>  [ { textContent: this.title } as unknown as HTMLElement ] ;
    }
    
    class FakeWindow {
      constructor(private title: string) {}
      document = new FakeDocument(this.title) as unknown as Document;
      confirm = (arg: string ): boolean => true;
    };
    
    let testsWindow = new FakeWindow('');
    let win = new FakeWindow('Frontend');

    expect(service.reloadPage(testsWindow as unknown as Window)).toBe(null); 
    expect(service.reloadPage(win as unknown as Window))
      .toEqual(win.document.location.reload());
    expect(service.showVersionMessage(win as unknown as Window))
      .toEqual(win.confirm("New version available. Load New Version?"));
  });
});