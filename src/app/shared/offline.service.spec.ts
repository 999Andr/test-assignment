import { CheckService } from './check.service';
import { OfflineService } from './offline.service';
import { Position, User } from './kinds';
describe('OfflineService', () => {
  
  let service: OfflineService;


  it('should be work on the "server"', () => {
    
    service = new OfflineService( new CheckService('server' as unknown as object));
    expect(service).toBeTruthy();
    expect(service.positions.length == 4).toBeTruthy();
    expect(service.positions[3]).toEqual({id: 4, name: "Designer"});
    expect(service.positions[2]['name']).toBe("Security");
    expect(service.positions[0]['name']).toBe("Lawyer");
    expect(service.users.length == 6).toBeTruthy(); 
    expect(service.users[3]['id']).toBe(4);
    expect(service.getViewport()).toBe(null);
    expect(service.getUsers()).toBe(null);
  
  });

  it('should be work on the "browser"', () => {
    
    service = new OfflineService( new CheckService('browser' as unknown as object));
    expect(service).toBeTruthy();
    expect(service.positions.length == 4).toBeTruthy();
    expect(service.positions[3]).toEqual({id: 4, name: "Designer"});
    expect(service.positions[2]['name']).toBe("Security");
    expect(service.positions[0]['name']).toBe("Lawyer");
    expect(service.users.length == 6).toBeTruthy();
    expect(service.getViewport() == null).toBeFalsy();
    expect(<number>service.getViewport() > 0).toBeTruthy();
    expect(service.getUsers() == null).toBeFalsy();
    
    
    let spyGetViewport = spyOn ( service ,  'getViewport' );
    spyGetViewport.and.returnValue(333);
    expect((<User[]>service.getUsers()).length).toBe(3);
    spyGetViewport.and.returnValue(999);
    expect((<User[]>service.getUsers()).length).toBe(6); 
    expect(  
      service.getViewportSize({innerWidth: 999} as unknown as Window)
    ).toBe(999);
    expect(  
      service.getViewportSize({document: {documentElement: {clientWidth: 99}}} as unknown as Window)
    ).toBe(99);
    expect(service.getBodyClWidth({document: {body: {clientWidth: 9}}} as unknown as Window))
    .toBe(9); 
    spyOn ( service ,  'getInnerWidth' ).and.returnValue(0);  
    spyOn ( service ,  'getElClWidth' ).and.returnValue(0);
    expect(service.getViewportSize({document: {body: {clientWidth: 9}}} as unknown as Window))
    .toBe(9);
    
  });

});

