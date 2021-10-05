import { CheckService } from './check.service';
import { OfflineService } from './offline.service';
import { ApiService } from './api.service';
import { fakeAsync, tick } from '@angular/core/testing';
import { ClientErr, Fails, ServerErr, HandleErr, Post, Position, User } from './kinds';

describe('ApiService', () => {
  
  let service: ApiService; 

  it('should be work on the server', () => {
    
    service =  new ApiService( 
      new CheckService('server' as unknown as object),
      new OfflineService( new CheckService('server' as unknown as object)) 
    );
    
    expect(service).toBeTruthy();
  
  });

  it('should be work on the browser', fakeAsync(() => {
    
    class FakeWindow { 
      fetch(arg: string, argPost?: RequestInit) {
        return Promise.resolve(
          { json() { 
              return Promise.resolve({token: '', success: true});
            }
          }
        )
      }
    }

    class MockCheckService {
      nativeWindow = new FakeWindow() as unknown as Window;
    }

    class MockOfflineService {
      
      position = [] as unknown as Position[];

      getUsers = () => [] as unknown as User[];
    }

    service =  new ApiService( 
      new MockCheckService() as unknown as CheckService,
      new MockOfflineService() as unknown as OfflineService 
    );
    
    expect(service).toBeTruthy();
     
    service.resHandler('999');
    tick();

    let spy = spyOn( service, 'resHandler' ); 
    expect(spy).not.toHaveBeenCalled();
    
    service.getPositions();
    expect(spy).toHaveBeenCalled();

    service.getToken();
    expect(spy).toHaveBeenCalled();

    let spyGetT = spyOn( service, 'getToken');

    spyGetT.and.returnValue(Promise.resolve({token: '', success: true}));
    service.passTokenToPostRequest();
    tick();
    
    spyGetT.and.returnValue(Promise.resolve({token: '', success: false}));
    service.passTokenToPostRequest();
    tick();

    spyGetT.and.returnValue(Promise.resolve());
    service.passTokenToPostRequest();
    tick();

    service.getUsers(999);
    expect(spy).toHaveBeenCalled();

    service.getUsers(333);
    expect(spy).toHaveBeenCalled();
  
    let sT = spyOn( service, 'passTokenToPostRequest');
    sT.and.returnValue(Promise.resolve({token: '', success: true}));
    service.makePost({} as unknown as FormData);
    tick();
    expect(spy).toHaveBeenCalled();

    service.showMoreUsers(999);
    expect(spy).toHaveBeenCalled();

    service.errClientHandler("getUsers", {} as unknown as ClientErr);
    service.errClientHandler("showMoreUsers", {} as unknown as ClientErr);
    service.errClientHandler("", {} as unknown as ClientErr);

    service.errServerHandler('', {} as unknown as ServerErr);
    service.errServerHandler('', {fails: {name: ['error']} as unknown as Fails} as unknown as ServerErr);
  }));

   
});