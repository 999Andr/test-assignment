import { ApiService } from '../../shared/api.service';
import { fakeAsync, tick, TestBed } from '@angular/core/testing';
import { Component, ElementRef } from '@angular/core';
import { CheckService } from '../../shared/check.service';
import { CheerfulService } from '../../shared/cheerful.service';
import { User } from '../../shared/kinds';
import { DisplayUsersService } from '../../shared/display-users.service';  
import { Observable, of } from 'rxjs';
import { CheerfulUsersComponent } from './cheerful-users.component'; 
import { OfflineService } from '../../shared/offline.service';
import { OnlineService } from '../../shared/online.service';
describe('CheerfulUsersComponent', () => {
  
  let component: CheerfulUsersComponent;
  let cheerfulService: CheerfulService;
  let apiService: ApiService;

  class MockCheckService {
    constructor(public nativeWindow: Window | null) {}
  }

  class MockDisplayUsersService {
    constructor(private check: CheckService) {}  
    getUsers$ = (): Observable<number> => of(999);
  }

  class MockApiService {
    constructor(private check: CheckService, private offline: OfflineService) {}  

    getUsers = (arg: number): Promise<any> => Promise.resolve({success: true, users: []}); 
    errClientHandler = (arg: string, err: any): any[] => [] ;
    errServerHandler(arg: string, data: any): void {};
    showMoreUsers = (arg: number): Promise<any> => 
      Promise.resolve({success: true, users: [], links: {next_url: true}});
  }
  
  class MockApiServiceWithServerErr {
    constructor(private check: CheckService, private offline: OfflineService) {}  

    getUsers = (arg: number): Promise<any> => Promise.resolve({success: false, users: []}); 
    errClientHandler = (arg: string, err: any): any[] => [] ;
    errServerHandler(arg: string, data: any): void {};
    showMoreUsers = (arg: number): Promise<any> => 
      Promise.resolve({success: false, users: [], links: {next_url: true}});
  }
  
  class MockApiServiceWithClientErrWhenGetUsers {
    constructor(private check: CheckService, private offline: OfflineService) {}  

    getUsers = (arg: number): Promise<any> => Promise.reject({success: false, users: []}); 
    errClientHandler = (arg: string, err: any): any[] => [] ;
    errServerHandler(arg: string, data: any): void {};
    showMoreUsers = (arg: number): Promise<any> => 
      Promise.resolve({success: true, users: [], links: {next_url: null}});
  }

  class MockApiServiceWithClientErrWhenShowMoreUsers {
    constructor(private check: CheckService, private offline: OfflineService) {}  

    getUsers = (arg: number): Promise<any> => Promise.reject({success: false, users: []}); 
    errClientHandler = (arg: string, err: any): any[] => [] ;
    errServerHandler(arg: string, data: any): void {};
    showMoreUsers = (arg: number): Promise<any> => 
      Promise.reject({success: false, users: [], links: {next_url: null}});
  }

  it('class should work on the server', () => {
    TestBed.configureTestingModule({
    
      providers: [
        CheerfulUsersComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(null), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: ApiService,
          useFactory: () => new ApiService(
            new CheckService('server' as unknown as object),
            new OfflineService( new CheckService('server' as unknown as object))
          ),
          deps: [] 
        },
        { provide: DisplayUsersService,  
          useFactory: () => new DisplayUsersService(
            new CheckService('server' as unknown as object)
          ),
          deps: [] 
        },
      ]
    }) ;
  
    component = TestBed.inject(CheerfulUsersComponent);
    
    expect(component).toBeTruthy();
    component.ngAfterViewInit();
    component.ngOnInit();
    component.ngOnDestroy();
  });

  it('class should work on the browser', fakeAsync(() => {
    TestBed.configureTestingModule({
    
      providers: [
        CheerfulUsersComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: ApiService,
          useFactory: () => new MockApiService(
            new CheckService('window' as unknown as object),
            new OfflineService( new CheckService('window' as unknown as object))
          ),
          deps: [] 
        },
        { provide: DisplayUsersService,  
          useFactory: () => new DisplayUsersService(
            new CheckService('window' as unknown as object)
          ),
          deps: [] 
        },
      ]
    }) ;
  
    component = TestBed.inject(CheerfulUsersComponent);
    cheerfulService = TestBed.inject(CheerfulService);
    
    expect(component).toBeTruthy();
    
    class MockNativeEl {
      scrollIntoView():void {}
    }
    
    class MockNameElem {
      nativeElement = new MockNativeEl() as unknown as any;
    }
    
    component.nameElem = new MockNameElem() as unknown as ElementRef<HTMLDivElement>;
    component.resetUsers();

    cheerfulService.doValues.next(false);
    component.ngOnInit();
    tick();
    
    cheerfulService.doValues.next(true);
    component.ngOnInit();
    tick();

    component.showMoreUsers();
    component.trackByFn(999, {id: 999} as unknown as User);
    
    
  }));
  
  it('class should work on the browser in case with server error', () => {
    TestBed.configureTestingModule({
    
      providers: [
        CheerfulUsersComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: ApiService,
          useFactory: () => new MockApiServiceWithServerErr(
            new CheckService('window' as unknown as object),
            new OfflineService( new CheckService('window' as unknown as object))
          ),
          deps: [] 
        },
        { provide: DisplayUsersService,  
          useFactory: () => new DisplayUsersService(
            new CheckService('window' as unknown as object)
          ),
          deps: [] 
        },
      ]
    }) ;
  
    component = TestBed.inject(CheerfulUsersComponent);

    expect(component).toBeTruthy();
    
    component.ngOnInit();
    
    component.showMoreUsers();
  
  }); 

  it('class should work on the browser in case with client error in "getUsers"', () => {
    TestBed.configureTestingModule({
    
      providers: [
        CheerfulUsersComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: ApiService,
          useFactory: () => new MockApiServiceWithClientErrWhenGetUsers(
            new CheckService('window' as unknown as object),
            new OfflineService( new CheckService('window' as unknown as object))
          ),
          deps: [] 
        },
        { provide: DisplayUsersService,  
          useFactory: () => new DisplayUsersService(
            new CheckService('window' as unknown as object)
          ),
          deps: [] 
        },
      ]
    }) ;
  
    component = TestBed.inject(CheerfulUsersComponent);
    
    expect(component).toBeTruthy();
    
    component.ngOnInit();
    
    component.showMoreUsers();
   
  }); 

  it('class should work on the browser in case with client error in "showMoreUsers"', () => {
    TestBed.configureTestingModule({
    
      providers: [
        CheerfulUsersComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: ApiService,
          useFactory: () => new MockApiServiceWithClientErrWhenShowMoreUsers(
            new CheckService('window' as unknown as object),
            new OfflineService( new CheckService('window' as unknown as object))
          ),
          deps: [] 
        },
        { provide: DisplayUsersService,  
          useFactory: () => new MockDisplayUsersService(
            new CheckService('window' as unknown as object)
          ),
          deps: [] 
        },
      ]
    }) ;
  
    component = TestBed.inject(CheerfulUsersComponent);
    expect(component).toBeTruthy();
    component.showMoreUsers();
  
    component.ngAfterViewInit();
      
  });     

  it('class should work when modal window closed and when screen resized', fakeAsync(() => {
    TestBed.configureTestingModule({
    
      providers: [
        CheerfulUsersComponent,
        { provide: CheckService, useFactory: () => new MockCheckService(window), deps: [] },
        { provide: CheerfulService, useClass: CheerfulService},
        { provide: OnlineService, useClass: OnlineService},
        { provide: ApiService,
          useFactory: () => new MockApiService(
            new CheckService('window' as unknown as object),
            new OfflineService( new CheckService('window' as unknown as object))
          ),
          deps: [] 
        },
        { provide: DisplayUsersService,  
          useFactory: () => new MockDisplayUsersService(
            new CheckService('window' as unknown as object)
          ),
          deps: [] 
        },
      ]
    }) ;
  
    component = TestBed.inject(CheerfulUsersComponent);
    let onlineService: OnlineService = TestBed.inject(OnlineService);

    expect(component).toBeTruthy();
    
    onlineService.doOnline.next(true);
    component.ngAfterViewInit();
    tick();
    
    onlineService.doOnline.next(false);
    component.ngAfterViewInit();
    tick();

  }));
});


