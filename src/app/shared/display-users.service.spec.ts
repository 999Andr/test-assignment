import { DisplayUsersService } from './display-users.service';
import { CheckService } from './check.service';
import { fakeAsync, tick } from '@angular/core/testing';

describe('DisplayUsersService' , () => {
  
  let service: DisplayUsersService  

  it('should be work on the server', () => {
    service =  new DisplayUsersService( new CheckService('server' as unknown as object) );
    expect(service).toBeTruthy();
  });

  it('should be work on the browser', fakeAsync(() => {

    service =  new DisplayUsersService( new CheckService('browser' as unknown as object) );
    expect(service).toBeTruthy();
    
    service.getViewport(window);
    service.getUsers$();
    
    let spyV = spyOn(service, 'getViewport');
    let w: number;
    
    spyV.and.returnValue(999);
    service.getUsers$().subscribe(arg  => { console.log(arg); w = arg; } );
    window.dispatchEvent(new Event('resize'));
    tick(2000);
    
    spyV.and.returnValue(333);
    
    service.getUsers$().subscribe(arg  => { console.log(arg); w = arg; });
    window.dispatchEvent(new Event('resize'));
    tick(2133);

  }));


  it('"getViewport" should be work in all browsers', () => {
    
    service =  new DisplayUsersService ( new CheckService('browser' as unknown as object) );
    
    expect(service).toBeTruthy();
    
    expect(  
      service.getViewport({innerWidth: 999} as unknown as Window)
    ).toBe(999);
    expect(  
      service.getViewport({document: {documentElement: {clientWidth: 99}}} as unknown as Window)
    ).toBe(99);
    expect(service.getBodyClWidth({document: {body: {clientWidth: 9}}} as unknown as Window))
    .toBe(9); 
    spyOn ( service ,  'getInnerWidth' ).and.returnValue(0);  
    spyOn ( service ,  'getElClWidth' ).and.returnValue(0);
    expect(service.getViewport({document: {body: {clientWidth: 9}}} as unknown as Window))
    .toBe(9); 
  });

});

